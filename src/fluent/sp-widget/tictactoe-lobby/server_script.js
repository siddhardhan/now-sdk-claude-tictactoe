(function() {
    var userId = gs.getUserID();
    data.userId = userId;
    data.error  = '';

    // Handle create-game action (optionally target a specific opponent by username)
    if (input && input.action === 'create') {
        var ng = new GlideRecord('x_1561651_tic_tac_game');
        ng.initialize();
        ng.setValue('initiator', userId);
        ng.setValue('title', input.title || '');
        if (input.opponentUsername) {
            var targetUser = new GlideRecord('sys_user');
            targetUser.addQuery('user_name', input.opponentUsername);
            targetUser.setLimit(1);
            targetUser.query();
            if (targetUser.next()) {
                ng.setValue('opponent', targetUser.getUniqueValue());
            } else {
                data.error = 'User not found: ' + input.opponentUsername;
                return;
            }
        }
        data.newGameId = ng.insert();
        return;
    }

    // Handle join/accept-challenge action
    if (input && input.action === 'join') {
        var jg = new GlideRecord('x_1561651_tic_tac_game');
        if (jg.get(input.gameId)
                && jg.getValue('status') === 'waiting'
                && jg.getValue('initiator') !== userId
                && (!jg.getValue('opponent') || jg.getValue('opponent') === userId)) {
            jg.setValue('opponent', userId);
            jg.setValue('status', 'in_progress');
            jg.update();
            data.joinedGameId = input.gameId;
        }
        return;
    }

    // Challenges for me (games I've been directly targeted in)
    data.challenges = [];
    var cq = new GlideRecord('x_1561651_tic_tac_game');
    cq.addQuery('status', 'waiting');
    cq.addQuery('opponent', userId);
    cq.orderByDesc('sys_created_on');
    cq.query();
    while (cq.next()) {
        data.challenges.push({
            sys_id:  cq.getUniqueValue(),
            title:   cq.getDisplayValue('title') || 'Challenge',
            from:    cq.getDisplayValue('initiator'),
            created: cq.getDisplayValue('sys_created_on'),
        });
    }

    // Available open games (waiting, not created by me, no pre-assigned opponent)
    data.availableGames = [];
    var ag = new GlideRecord('x_1561651_tic_tac_game');
    ag.addQuery('status', 'waiting');
    ag.addQuery('initiator', '!=', userId);
    ag.addNullQuery('opponent');
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

    // My past games (completed or draw), most recent first
    data.pastGames = [];
    var pg = new GlideRecord('x_1561651_tic_tac_game');
    var pgStatus = pg.addQuery('status', 'completed');
    pgStatus.addOrCondition('status', 'draw');
    var pgPart = pg.addQuery('initiator', userId);
    pgPart.addOrCondition('opponent', userId);
    pg.orderByDesc('sys_updated_on');
    pg.setLimit(20);
    pg.query();
    while (pg.next()) {
        var pgStat   = pg.getValue('status');
        var pgWinner = pg.getValue('winner');
        var pgInit   = pg.getValue('initiator');
        var outcome  = pgStat === 'draw' ? 'draw' : (pgWinner === userId ? 'won' : 'lost');
        var amI      = pgInit === userId;
        data.pastGames.push({
            sys_id:     pg.getUniqueValue(),
            title:      pg.getDisplayValue('title') || 'Tic Tac Toe',
            opponent:   amI ? pg.getDisplayValue('opponent') : pg.getDisplayValue('initiator'),
            mySymbol:   amI ? 'X' : 'O',
            outcome:    outcome,
            boardCells: pg.getValue('board').split(''),
            date:       pg.getDisplayValue('sys_updated_on'),
        });
    }
})();
