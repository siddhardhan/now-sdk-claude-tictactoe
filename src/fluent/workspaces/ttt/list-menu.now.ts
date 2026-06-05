import '@servicenow/sdk/global'
import { UxListMenuConfig, Role, Applicability } from '@servicenow/sdk/core'

const tttPlayerRole = Role({
    $id: Now.ID['ttt_player_role'],
    name: 'x_1561651_tic_tac.player',
    containsRoles: ['canvas_user'],
})

export const tttApplicability = Applicability({
    $id: Now.ID['ttt_applicability'],
    name: 'Tic Tac Toe Players',
    roles: [tttPlayerRole],
})

export const tttListConfig = UxListMenuConfig({
    $id: Now.ID['ttt_list_config'],
    name: 'Tic Tac Toe List Configuration',
    categories: [
        {
            $id: Now.ID['ttt_my_games_category'],
            title: 'My Games',
            order: 10,
            lists: [
                {
                    $id: Now.ID['ttt_my_waiting_list'],
                    title: 'Waiting',
                    order: 10,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,opponent,sys_created_on',
                    condition: 'status=waiting^initiatorDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_my_waiting_app'],
                        applicability: tttApplicability,
                    }],
                },
                {
                    $id: Now.ID['ttt_my_active_list'],
                    title: 'Active',
                    order: 20,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,opponent,current_turn,sys_updated_on',
                    condition: 'status=in_progress^initiatorDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_my_active_app'],
                        applicability: tttApplicability,
                    }],
                },
                {
                    $id: Now.ID['ttt_my_history_list'],
                    title: 'History',
                    order: 30,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,opponent,winner,status,sys_updated_on',
                    condition: 'status=completed^ORstatus=draw^initiatorDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_my_history_app'],
                        applicability: tttApplicability,
                    }],
                },
            ],
        },
        {
            $id: Now.ID['ttt_all_games_category'],
            title: 'All Games',
            order: 20,
            lists: [
                {
                    $id: Now.ID['ttt_all_active_list'],
                    title: 'Active',
                    order: 10,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,initiator,opponent,current_turn,sys_updated_on',
                    condition: 'status=in_progress^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_all_active_app'],
                        applicability: tttApplicability,
                    }],
                },
                {
                    $id: Now.ID['ttt_all_open_list'],
                    title: 'Open',
                    order: 20,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,initiator,sys_created_on',
                    condition: 'status=waiting^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_all_open_app'],
                        applicability: tttApplicability,
                    }],
                },
                {
                    $id: Now.ID['ttt_all_completed_list'],
                    title: 'Completed',
                    order: 30,
                    table: 'x_1561651_tic_tac_game',
                    columns: 'title,initiator,opponent,winner,status,sys_updated_on',
                    condition: 'status=completed^ORstatus=draw^EQ',
                    applicabilities: [{
                        $id: Now.ID['ttt_all_completed_app'],
                        applicability: tttApplicability,
                    }],
                },
            ],
        },
    ],
})
