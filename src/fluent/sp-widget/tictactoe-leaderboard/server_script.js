(function() {
    data.currentUserId = gs.getUserID();
    data.players = [];

    var playerMap = {};

    var gr = new GlideRecord('x_1561651_tic_tac_game');
    var sc = gr.addQuery('status', 'completed');
    sc.addOrCondition('status', 'draw');
    gr.query();

    while (gr.next()) {
        var initId  = gr.getValue('initiator');
        var oppId   = gr.getValue('opponent');
        var status  = gr.getValue('status');
        var winner  = gr.getValue('winner');

        if (initId && !playerMap[initId])
            playerMap[initId] = { name: gr.getDisplayValue('initiator'), wins: 0, losses: 0, draws: 0 };
        if (oppId && !playerMap[oppId])
            playerMap[oppId] = { name: gr.getDisplayValue('opponent'), wins: 0, losses: 0, draws: 0 };

        if (status === 'draw') {
            if (initId) playerMap[initId].draws++;
            if (oppId)  playerMap[oppId].draws++;
        } else {
            if (winner === initId) {
                if (initId) playerMap[initId].wins++;
                if (oppId)  playerMap[oppId].losses++;
            } else if (winner === oppId) {
                if (oppId)  playerMap[oppId].wins++;
                if (initId) playerMap[initId].losses++;
            }
        }
    }

    for (var id in playerMap) {
        var p     = playerMap[id];
        p.sys_id  = id;
        p.total   = p.wins + p.losses + p.draws;
        p.winPct  = p.total > 0 ? Math.round(p.wins / p.total * 100) : 0;
        data.players.push(p);
    }

    data.players.sort(function(a, b) {
        if (b.wins !== a.wins) return b.wins - a.wins;
        return b.winPct - a.winPct;
    });
})();
