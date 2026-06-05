api.controller = function() {
    var c = this;
    c.newTitle = '';

    c.createGame = function() {
        c.server.get({ action: 'create', title: c.newTitle }).then(function(r) {
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

    c.openGame = function(gameId) {
        window.location.href = window.location.pathname + '?id=ttt-board&gameId=' + gameId;
    };
};
