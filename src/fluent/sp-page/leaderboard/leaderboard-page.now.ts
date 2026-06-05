import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { tttLeaderboardWidget } from '../../sp-widget/tictactoe-leaderboard/widget.now.js'

export const tttLeaderboardPage = SPPage({
    pageId: 'ttt-leaderboard',
    title: 'Leaderboard',
    category: 'custom',
    containers: [
        {
            $id: Now.ID['ttt_leaderboard_container'],
            name: 'Leaderboard Container',
            width: 'container',
            order: 10,
            rows: [
                {
                    $id: Now.ID['ttt_leaderboard_row'],
                    order: 10,
                    columns: [
                        {
                            $id: Now.ID['ttt_leaderboard_column'],
                            size: 12,
                            instances: [
                                {
                                    $id: Now.ID['ttt_leaderboard_instance'],
                                    widget: tttLeaderboardWidget,
                                    order: 10,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
