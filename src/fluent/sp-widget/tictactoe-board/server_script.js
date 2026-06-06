(function() {
    var userId    = gs.getUserID();
    var gameId    = $sp.getParameter('gameId') || (input && input.gameId);
    data.userId   = userId;
    data.game     = null;
    data.error    = '';
    data.moveResult = null;

    var WIN_LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function checkWin(board) {
        for (var i = 0; i < WIN_LINES.length; i++) {
            var l = WIN_LINES[i];
            if (board[l[0]] !== '-' && board[l[0]] === board[l[1]] && board[l[1]] === board[l[2]])
                return board[l[0]];
        }
        return null;
    }

    function loadGame(gr) {
        var initiatorId = gr.getValue('initiator');
        var opponentId  = gr.getValue('opponent');
        return {
            sys_id:      gr.getUniqueValue(),
            title:       gr.getDisplayValue('title') || 'Tic Tac Toe',
            board:       gr.getValue('board'),
            status:      gr.getValue('status'),
            initiator:   gr.getDisplayValue('initiator'),
            initiatorId: initiatorId,
            opponent:    gr.getDisplayValue('opponent'),
            opponentId:  opponentId,
            winner:      gr.getDisplayValue('winner'),
            currentTurn: gr.getValue('current_turn'),
            isMyTurn:    gr.getValue('current_turn') === userId,
            mySymbol:    userId === initiatorId ? 'X' : 'O',
        };
    }

    if (!gameId) { data.error = 'No game specified.'; return; }

    var gr = new GlideRecord('x_1561651_tic_tac_game');
    gr.setLimit(1);
    if (!gr.get(gameId)) { data.error = 'Game not found.'; return; }

    var initiatorId = gr.getValue('initiator');
    var opponentId  = gr.getValue('opponent');

    if (userId !== initiatorId && userId !== opponentId) {
        data.error = 'You are not a participant in this game.';
        return;
    }

    // Handle rematch action
    if (input && input.action === 'rematch') {
        var finishedStatus = gr.getValue('status');
        if (finishedStatus !== 'completed' && finishedStatus !== 'draw') {
            data.error = 'Cannot rematch: game is not finished.';
        } else {
            var winnerId = gr.getValue('winner');
            // Loser (or opponent on draw) becomes new initiator so they go first as X
            var newInitiatorId = (finishedStatus === 'draw' || winnerId === initiatorId)
                ? opponentId : initiatorId;
            var newOpponentId  = (newInitiatorId === initiatorId) ? opponentId : initiatorId;

            var ng = new GlideRecord('x_1561651_tic_tac_game');
            ng.initialize();
            ng.setValue('initiator', newInitiatorId);
            ng.setValue('opponent',  newOpponentId);
            ng.setValue('title', 'Rematch: ' + (gr.getDisplayValue('title') || 'Tic Tac Toe'));
            var rematchId = ng.insert();

            // Both players are known — immediately start the game
            var rg = new GlideRecord('x_1561651_tic_tac_game');
            if (rg.get(rematchId)) {
                rg.setValue('status', 'in_progress');
                rg.update();
            }
            data.rematchGameId = rematchId;
        }
        data.game = loadGame(gr);
        return;
    }

    // Handle makeMove action
    if (input && input.action === 'makeMove') {
        var position = parseInt(input.position, 10);

        if (gr.getValue('status') !== 'in_progress') {
            data.error = 'Game is not in progress.';
        } else if (gr.getValue('current_turn') !== userId) {
            data.error = 'Not your turn.';
        } else {
            var board  = gr.getValue('board').split('');
            var isX    = initiatorId === userId;
            var symbol = isX ? 'X' : 'O';

            if (isNaN(position) || position < 0 || position > 8 || board[position] !== '-') {
                data.error = 'Invalid position.';
            } else {
                board[position] = symbol;
                var boardStr = board.join('');
                var winner   = checkWin(boardStr);
                var isDraw   = !winner && boardStr.indexOf('-') === -1;

                gr.setValue('board', boardStr);
                if (winner) {
                    gr.setValue('status', 'completed');
                    gr.setValue('winner', userId);
                    gr.setValue('current_turn', '');
                } else if (isDraw) {
                    gr.setValue('status', 'draw');
                    gr.setValue('current_turn', '');
                } else {
                    gr.setValue('current_turn', isX ? opponentId : initiatorId);
                }
                gr.update();

                // Re-fetch fresh state
                gr.get(gameId);
            }
        }
    }

    data.game = loadGame(gr);

    // Head-to-head record (only when both players are known)
    data.h2h = null;
    if (opponentId) {
        var h2h = { wins: 0, losses: 0, draws: 0 };
        var otherId = (userId === initiatorId) ? opponentId : initiatorId;

        // Games where I was initiator and they were opponent
        var q1 = new GlideRecord('x_1561651_tic_tac_game');
        var q1s = q1.addQuery('status', 'completed');
        q1s.addOrCondition('status', 'draw');
        q1.addQuery('initiator', userId);
        q1.addQuery('opponent', otherId);
        q1.query();
        while (q1.next()) {
            if (q1.getValue('status') === 'draw') h2h.draws++;
            else if (q1.getValue('winner') === userId) h2h.wins++;
            else h2h.losses++;
        }

        // Games where they were initiator and I was opponent
        var q2 = new GlideRecord('x_1561651_tic_tac_game');
        var q2s = q2.addQuery('status', 'completed');
        q2s.addOrCondition('status', 'draw');
        q2.addQuery('initiator', otherId);
        q2.addQuery('opponent', userId);
        q2.query();
        while (q2.next()) {
            if (q2.getValue('status') === 'draw') h2h.draws++;
            else if (q2.getValue('winner') === userId) h2h.wins++;
            else h2h.losses++;
        }

        if (h2h.wins + h2h.losses + h2h.draws > 0) data.h2h = h2h;
    }
})();
