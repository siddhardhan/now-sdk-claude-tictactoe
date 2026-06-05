api.controller = function() {
    var c = this;
    c.newTitle    = '';
    c.newOpponent = '';

    c.createGame = function() {
        c.server.get({ action: 'create', title: c.newTitle, opponentUsername: c.newOpponent }).then(function(r) {
            if (r.data.error) { c.data.error = r.data.error; return; }
            if (r.data.newGameId)
                window.location.href = window.location.pathname + '?id=ttt-board&gameId=' + r.data.newGameId;
        });
    };

    c.joinGame = function(gameId) {
        c.server.get({ action: 'join', gameId: gameId }).then(function(r) {
            if (r.data.joinedGameId)
                window.location.href = window.location.pathname + '?id=ttt-board&gameId=' + r.data.joinedGameId;
        });
    };

    c.acceptChallenge = function(gameId) {
        c.server.get({ action: 'join', gameId: gameId }).then(function(r) {
            if (r.data.joinedGameId)
                window.location.href = window.location.pathname + '?id=ttt-board&gameId=' + r.data.joinedGameId;
        });
    };

    c.openGame = function(gameId) {
        window.location.href = window.location.pathname + '?id=ttt-board&gameId=' + gameId;
    };

    c.goLeaderboard = function() {
        window.location.href = window.location.pathname + '?id=ttt-leaderboard';
    };
};
