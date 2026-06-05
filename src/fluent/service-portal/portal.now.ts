import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { tttLobbyPage } from '../sp-page/lobby/lobby-page.now.js'

export const tttPortal = ServicePortal({
    $id: Now.ID['ttt_portal'],
    title: 'Tic Tac Toe',
    urlSuffix: 'ttt',
    theme: '281507c44317d210ca4c1f425db8f2fd',
    homePage: tttLobbyPage,
})
