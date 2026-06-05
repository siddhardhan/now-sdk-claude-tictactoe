import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const tttLobbyWidget = SPWidget({
    $id: Now.ID['ttt_lobby_widget'],
    name: 'x_1561651_tic_tac_lobby',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss:    Now.include('./styles.css'),
})
