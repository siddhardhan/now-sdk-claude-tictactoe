var TicTacToeEngine = Class.create();
TicTacToeEngine.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    WIN_LINES: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

    _checkWin: function(board) {
        for (var i = 0; i < this.WIN_LINES.length; i++) {
            var l = this.WIN_LINES[i];
            if (board[l[0]] !== '-' && board[l[0]] === board[l[1]] && board[l[1]] === board[l[2]])
                return board[l[0]];
        }
        return null;
    },

    _checkDraw: function(board) {
        return board.indexOf('-') === -1;
    },

    // GlideAjax params: sysparm_name=makeMove, sysparm_game_id, sysparm_position (0-8)
    makeMove: function() {
        var gameId   = this.getParameter('sysparm_game_id');
        var position = parseInt(this.getParameter('sysparm_position'), 10);
        var userId   = gs.getUserID();

        var gr = new GlideRecord('x_1561651_tic_tac_game');
        if (!gr.get(gameId))
            return JSON.stringify({ error: 'Game not found' });
        if (gr.getValue('status') !== 'in_progress')
            return JSON.stringify({ error: 'Game is not in progress' });
        if (gr.getValue('current_turn') !== userId)
            return JSON.stringify({ error: 'Not your turn' });

        var board  = gr.getValue('board').split('');
        var isX    = gr.getValue('initiator') === userId;
        var symbol = isX ? 'X' : 'O';

        if (position < 0 || position > 8 || board[position] !== '-')
            return JSON.stringify({ error: 'Invalid position' });

        board[position] = symbol;
        var boardStr = board.join('');
        var winner   = this._checkWin(boardStr);
        var isDraw   = !winner && this._checkDraw(boardStr);

        gr.setValue('board', boardStr);
        if (winner) {
            gr.setValue('status', 'completed');
            gr.setValue('winner', userId);
            gr.setValue('current_turn', '');
        } else if (isDraw) {
            gr.setValue('status', 'draw');
            gr.setValue('current_turn', '');
        } else {
            gr.setValue('current_turn', isX ? gr.getValue('opponent') : gr.getValue('initiator'));
        }
        gr.update();

        return JSON.stringify({
            board:       boardStr,
            status:      gr.getValue('status'),
            winner:      winner,
            isDraw:      isDraw,
            currentTurn: gr.getValue('current_turn'),
        });
    },

    // GlideAjax params: sysparm_name=getGameState, sysparm_game_id
    getGameState: function() {
        var gameId = this.getParameter('sysparm_game_id');
        var userId = gs.getUserID();
        var gr     = new GlideRecord('x_1561651_tic_tac_game');
        if (!gr.get(gameId)) return JSON.stringify({ error: 'Not found' });

        return JSON.stringify({
            board:       gr.getValue('board'),
            status:      gr.getValue('status'),
            currentTurn: gr.getValue('current_turn'),
            isMyTurn:    gr.getValue('current_turn') === userId,
            winner:      gr.getDisplayValue('winner'),
            opponent:    gr.getDisplayValue('opponent'),
            opponentId:  gr.getValue('opponent'),
        });
    },

    type: 'TicTacToeEngine',
});
