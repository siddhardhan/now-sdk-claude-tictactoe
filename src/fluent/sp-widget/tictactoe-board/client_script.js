api.controller = function($timeout) {
    var c = this;
    c.cells  = [];
    c._timer = null;

    function buildCells(board) {
        c.cells = (board || '---------').split('').map(function(ch, i) {
            return { index: i, value: ch === '-' ? '' : ch };
        });
    }

    function scheduleRefresh() {
        if (c._timer) { $timeout.cancel(c._timer); c._timer = null; }
        var g = c.data.game;
        if (!g) return;
        if (g.status === 'waiting' || (g.status === 'in_progress' && !g.isMyTurn)) {
            c._timer = $timeout(function() { c.refresh(); }, 3000);
        }
    }

    c.refresh = function() {
        var gameId = c.data.game && c.data.game.sys_id;
        if (!gameId) return;
        var ga = new GlideAjax('TicTacToeEngine');
        ga.addParam('sysparm_name', 'getGameState');
        ga.addParam('sysparm_game_id', gameId);
        ga.getXMLAnswer(function(resp) {
            var r = JSON.parse(resp);
            if (r.error) return;
            var g = c.data.game;
            g.board       = r.board;
            g.status      = r.status;
            g.currentTurn = r.currentTurn;
            g.isMyTurn    = r.isMyTurn;
            g.winner      = r.winner;
            if (!g.opponent && r.opponent) g.opponent = r.opponent;
            buildCells(r.board);
            scheduleRefresh();
        });
    };

    c.makeMove = function(index) {
        var g = c.data.game;
        if (!g || !g.isMyTurn || g.status !== 'in_progress') return;
        if (c.cells[index].value) return;

        var ga = new GlideAjax('TicTacToeEngine');
        ga.addParam('sysparm_name', 'makeMove');
        ga.addParam('sysparm_game_id', g.sys_id);
        ga.addParam('sysparm_position', index);
        ga.getXMLAnswer(function(resp) {
            var r = JSON.parse(resp);
            if (r.error) { alert(r.error); return; }
            g.board       = r.board;
            g.status      = r.status;
            g.isMyTurn    = false;
            g.currentTurn = r.currentTurn;
            if (r.winner) g.winner = g.mySymbol === 'X' ? g.initiator : g.opponent;
            buildCells(r.board);
            scheduleRefresh();
        });
    };

    c.goLobby = function() {
        window.location.href = window.location.pathname + '?id=ttt-lobby';
    };

    if (c.data.game) { buildCells(c.data.game.board); scheduleRefresh(); }
};
