import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const tttLeaderboardWidget = SPWidget({
    $id: Now.ID['ttt_leaderboard_widget'],
    name: 'x_1561651_tic_tac_leaderboard',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss:    Now.include('./styles.css'),
})
