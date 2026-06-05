(function() {
    var userId = gs.getUserID();
    var gameId = $sp.getParameter('gameId') || (input && input.gameId);
    data.userId = userId;
    data.game   = null;
    data.error  = '';

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

    data.game = {
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
})();
