import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'
import { tttWorkspace } from './workspace.now.js'

Dashboard({
    $id: Now.ID['ttt_dashboard'],
    name: 'Tic Tac Toe Dashboard',
    tabs: [{
        $id: Now.ID['ttt_overview_tab'],
        name: 'Overview',
        widgets: [

            // Row 1 — three score tiles (y=0, height=14)
            {
                $id: Now.ID['ttt_active_score'],
                component: 'single-score',
                componentProps: {
                    dataSources: [{
                        label: 'Game', sourceType: 'table',
                        tableOrViewName: 'x_1561651_tic_tac_game',
                        filterQuery: 'status=in_progress',
                        id: 'ds_active',
                    }],
                    headerTitle: 'Active Games',
                    metrics: [{
                        dataSource: 'ds_active', id: 'metric_active',
                        aggregateFunction: 'COUNT', axisId: 'primary',
                    }],
                },
                height: 14, width: 14, position: { x: 0, y: 0 },
            },
            {
                $id: Now.ID['ttt_waiting_score'],
                component: 'single-score',
                componentProps: {
                    dataSources: [{
                        label: 'Game', sourceType: 'table',
                        tableOrViewName: 'x_1561651_tic_tac_game',
                        filterQuery: 'status=waiting',
                        id: 'ds_waiting',
                    }],
                    headerTitle: 'Open / Waiting',
                    metrics: [{
                        dataSource: 'ds_waiting', id: 'metric_waiting',
                        aggregateFunction: 'COUNT', axisId: 'primary',
                    }],
                },
                height: 14, width: 17, position: { x: 14, y: 0 },
            },
            {
                $id: Now.ID['ttt_finished_score'],
                component: 'single-score',
                componentProps: {
                    dataSources: [{
                        label: 'Game', sourceType: 'table',
                        tableOrViewName: 'x_1561651_tic_tac_game',
                        filterQuery: 'status=completed^ORstatus=draw',
                        id: 'ds_finished',
                    }],
                    headerTitle: 'Finished',
                    metrics: [{
                        dataSource: 'ds_finished', id: 'metric_finished',
                        aggregateFunction: 'COUNT', axisId: 'primary',
                    }],
                },
                height: 14, width: 17, position: { x: 31, y: 0 },
            },

            // Row 2 — donut (left) + top winners bar (right) (y=14, height=20)
            {
                $id: Now.ID['ttt_status_donut'],
                component: 'donut',
                componentProps: {
                    dataSources: [{
                        label: 'Game', sourceType: 'table',
                        tableOrViewName: 'x_1561651_tic_tac_game',
                        filterQuery: '',
                        id: 'ds_all',
                    }],
                    headerTitle: 'Games by Status',
                    metrics: [{
                        dataSource: 'ds_all', id: 'metric_all',
                        aggregateFunction: 'COUNT', axisId: 'primary',
                    }],
                    groupBy: [{
                        groupBy: [{ dataSource: 'ds_all', groupByField: 'status' }],
                        maxNumberOfGroups: 10, showOthers: false,
                    }],
                },
                height: 20, width: 24, position: { x: 0, y: 14 },
            },
            {
                $id: Now.ID['ttt_winners_bar'],
                component: 'horizontal-bar',
                componentProps: {
                    dataSources: [{
                        label: 'Game', sourceType: 'table',
                        tableOrViewName: 'x_1561651_tic_tac_game',
                        filterQuery: 'status=completed',
                        id: 'ds_won',
                    }],
                    headerTitle: 'Top Winners',
                    metrics: [{
                        dataSource: 'ds_won', id: 'metric_wins',
                        aggregateFunction: 'COUNT', axisId: 'primary',
                    }],
                    groupBy: [{
                        groupBy: [{ dataSource: 'ds_won', groupByField: 'winner' }],
                        maxNumberOfGroups: 10, showOthers: false,
                    }],
                    sortBy: 'value',
                },
                height: 20, width: 24, position: { x: 24, y: 14 },
            },
        ],
    }],
    visibilities: [{
        $id: Now.ID['ttt_dashboard_visibility'],
        experience: tttWorkspace,
    }],
    permissions: [],
})
