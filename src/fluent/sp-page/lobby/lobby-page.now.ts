import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { tttLobbyWidget } from '../../sp-widget/tictactoe-lobby/widget.now.js'

export const tttLobbyPage = SPPage({
    pageId: 'ttt-lobby',
    title: 'Game Lobby',
    category: 'custom',
    containers: [
        {
            $id: Now.ID['ttt_lobby_container'],
            name: 'Lobby Container',
            width: 'container',
            order: 10,
            rows: [
                {
                    $id: Now.ID['ttt_lobby_row'],
                    order: 10,
                    columns: [
                        {
                            $id: Now.ID['ttt_lobby_column'],
                            size: 12,
                            instances: [
                                {
                                    $id: Now.ID['ttt_lobby_instance'],
                                    widget: tttLobbyWidget,
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
