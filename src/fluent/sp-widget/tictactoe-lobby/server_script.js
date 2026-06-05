(function() {
    var userId = gs.getUserID();
    data.userId = userId;

    // Handle create-game action
    if (input && input.action === 'create') {
        var ng = new GlideRecord('x_1561651_tic_tac_game');
        ng.initialize();
        ng.setValue('initiator', userId);
        ng.setValue('title', input.title || '');
        data.newGameId = ng.insert();
        return;
    }

    // Handle join-game action
    if (input && input.action === 'join') {
        var jg = new GlideRecord('x_1561651_tic_tac_game');
        if (jg.get(input.gameId) && jg.getValue('status') === 'waiting'
                && jg.getValue('initiator') !== userId) {
            jg.setValue('opponent', userId);
            jg.setValue('status', 'in_progress');
            jg.update();
            data.joinedGameId = input.gameId;
        }
        return;
    }

    // Available games (waiting, not created by me)
    data.availableGames = [];
    var ag = new GlideRecord('x_1561651_tic_tac_game');
    ag.addQuery('status', 'waiting');
    ag.addQuery('initiator', '!=', userId);
    ag.orderByDesc('sys_created_on');
    ag.query();
    while (ag.next()) {
        data.availableGames.push({
            sys_id:    ag.getUniqueValue(),
            title:     ag.getDisplayValue('title') || ('Game #' + ag.getUniqueValue().substring(0, 6)),
            initiator: ag.getDisplayValue('initiator'),
            created:   ag.getDisplayValue('sys_created_on'),
        });
    }

    // My waiting games (I created, still open)
    data.myWaiting = [];
    var mw = new GlideRecord('x_1561651_tic_tac_game');
    mw.addQuery('status', 'waiting');
    mw.addQuery('initiator', userId);
    mw.query();
    while (mw.next()) {
        data.myWaiting.push({
            sys_id:  mw.getUniqueValue(),
            title:   mw.getDisplayValue('title') || 'My Game',
            created: mw.getDisplayValue('sys_created_on'),
        });
    }

    // My in-progress games
    data.myGames = [];
    var mg = new GlideRecord('x_1561651_tic_tac_game');
    mg.addQuery('status', 'in_progress');
    var cond = mg.addQuery('initiator', userId);
    cond.addOrCondition('opponent', userId);
    mg.orderByDesc('sys_updated_on');
    mg.query();
    while (mg.next()) {
        var amInitiator = mg.getValue('initiator') === userId;
        data.myGames.push({
            sys_id:   mg.getUniqueValue(),
            title:    mg.getDisplayValue('title') || 'Game',
            vs:       amInitiator ? mg.getDisplayValue('opponent') : mg.getDisplayValue('initiator'),
            isMyTurn: mg.getValue('current_turn') === userId,
        });
    }
})();
