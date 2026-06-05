# Tic Tac Toe — ServiceNow Application

## Project Overview
A multiplayer Tic Tac Toe game built as a scoped ServiceNow application using the **now-sdk (Fluent DSL v4.6)**. Two logged-in users can play against each other via Service Portal. The game initiator always plays as **X** and takes the first turn.

## Instance & Scope
| Field | Value |
|---|---|
| Scope name | `x_1561651_tic_tac` |
| Scope ID | `b2d4e6c012b0457aa296989b91424ee7` |
| App name | Tic Tac Toe |
| Portal URL suffix | `ttt` → `/<instance>/ttt` |

## Architecture

### Tech Stack
- **SDK**: `@servicenow/sdk 4.6.0`, `@servicenow/glide 27.0.5`
- **UI**: Service Portal (AngularJS + Bootstrap 3)
- **Server logic**: GlideRecord, GlideAjax (client-callable ScriptInclude)

### Data Model — `x_1561651_tic_tac_game`
| Field | Type | Notes |
|---|---|---|
| `title` | StringColumn(100) | Optional game title |
| `initiator` | ReferenceColumn(sys_user) | Player X — always goes first |
| `opponent` | ReferenceColumn(sys_user) | Player O — joins later |
| `board` | StringColumn(9) | 9-char string: `X`, `O`, or `-` per cell |
| `status` | ChoiceColumn | `waiting` / `in_progress` / `completed` / `draw` |
| `current_turn` | ReferenceColumn(sys_user) | Whose turn it is |
| `winner` | ReferenceColumn(sys_user) | Null on draw |

**Board positions** (left→right, top→bottom):
```
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

### Win conditions (index triples)
`[0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]`

## File Structure
```
src/
  fluent/                          ← Fluent DSL (.now.ts) definitions
    tables/
      game.now.ts                  ← Game table schema
    business-rules/
      game-setup.now.ts            ← Before-insert: init board + status + turn
    script-includes/
      tictactoe-engine.now.ts      ← ScriptInclude definition (client-callable)
    service-portal/
      portal.now.ts                ← Portal at /ttt, lobby as home page
    sp-page/
      lobby/lobby-page.now.ts      ← Page: ttt-lobby
      board/board-page.now.ts      ← Page: ttt-board
    sp-widget/
      tictactoe-lobby/             ← Lobby widget (browse/create/join games)
        widget.now.ts
        server_script.js
        client_script.js
        template.html
        styles.css
      tictactoe-board/             ← Board widget (play the game)
        widget.now.ts
        server_script.js
        client_script.js
        template.html
        styles.css
  server/                          ← Plain JS for server-side scripts
    business-rules/
      game-setup.js
    script-includes/
      TicTacToeEngine.js           ← makeMove + getGameState via GlideAjax
```

## Key Components

### Business Rule (`game-setup.js`)
Runs **before insert** on `x_1561651_tic_tac_game`. Sets:
- `board` = `---------`
- `status` = `waiting`
- `current_turn` = `initiator`

### ScriptInclude (`TicTacToeEngine.js`)
Client-callable via `GlideAjax('TicTacToeEngine')`.

| Method | `sysparm_name` | Other params | Returns |
|---|---|---|---|
| Make a move | `makeMove` | `sysparm_game_id`, `sysparm_position` (0–8) | JSON: board, status, winner, isDraw, currentTurn |
| Poll state | `getGameState` | `sysparm_game_id` | JSON: board, status, isMyTurn, winner, opponent |

Validates: correct player's turn, position is empty, game is in_progress.

### Lobby Widget (`x_1561651_tic_tac_lobby`)
- **Server actions**: `create` (insert new game), `join` (set opponent, status→in_progress)
- **Displays**: available games to join, my waiting games, my active games
- **Navigation**: redirects to `?id=ttt-board&gameId=<sys_id>` after create/join

### Board Widget (`x_1561651_tic_tac_board`)
- Reads `gameId` from URL param via `$sp.getParameter('gameId')`
- Renders 3×3 grid; clicks call `TicTacToeEngine.makeMove` via GlideAjax
- Auto-polls every 3 seconds when it's not the current user's turn (or while waiting for opponent)
- Shows turn indicator, win/draw banners

## Development Workflow

```bash
# Install dependencies (first time)
npm install

# Validate fluent files locally
npm run build

# Authenticate to ServiceNow instance (first time)
npx @servicenow/sdk auth add

# Deploy to instance
npm run deploy

# After placing widgets in SP Designer, capture layout
npm run transform

# Refresh TypeScript types from instance
npm run types
```

## Post-Deploy Setup (required once)
After `npm run deploy`, use the **Service Portal Designer** to place widgets on their pages:

1. Go to `/<instance>/sp_config` → **Pages**
2. Open `ttt-lobby` → drag widget **`x_1561651_tic_tac_lobby`** onto the canvas → Save
3. Open `ttt-board` → drag widget **`x_1561651_tic_tac_board`** onto the canvas → Save
4. Open `/<instance>/ttt` to verify the lobby loads

## Game Flow
1. User A opens `/<instance>/ttt` → sees lobby
2. User A clicks **Create & Wait** → game record created (status=`waiting`, board=`---------`, turn=User A)
3. User A is redirected to the board, sees "Waiting for opponent" spinner
4. User B opens lobby → game appears in **Available Games** → clicks **Join**
5. Game status → `in_progress`; User B redirected to board
6. User A (X) sees "Your Turn" — clicks a cell → `makeMove` called
7. Turn flips to User B (O); User A's board polls and updates
8. Play continues until win or draw
9. Both players see the result; **Back to Lobby** returns to `ttt-lobby`
