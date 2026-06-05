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
        c.server.get({ gameId: c.data.game && c.data.game.sys_id }).then(function(r) {
            if (r.data.game) {
                c.data.game = r.data.game;
                buildCells(r.data.game.board);
            }
            c.data.error = r.data.error || '';
            scheduleRefresh();
        });
    };

    c.makeMove = function(index) {
        var g = c.data.game;
        if (!g || !g.isMyTurn || g.status !== 'in_progress') return;
        if (c.cells[index].value) return;

        c.server.get({ gameId: g.sys_id, action: 'makeMove', position: index }).then(function(r) {
            if (r.data.error) { c.data.error = r.data.error; return; }
            if (r.data.game) {
                c.data.game = r.data.game;
                buildCells(r.data.game.board);
            }
            scheduleRefresh();
        });
    };

    c.goLobby = function() {
        window.location.href = window.location.pathname + '?id=ttt-lobby';
    };

    if (c.data.game) { buildCells(c.data.game.board); scheduleRefresh(); }
};
