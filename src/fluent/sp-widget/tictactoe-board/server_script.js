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
})();
