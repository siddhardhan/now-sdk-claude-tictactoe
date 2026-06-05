import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { tttBoardWidget } from '../../sp-widget/tictactoe-board/widget.now.js'

export const tttBoardPage = SPPage({
    pageId: 'ttt-board',
    title: 'Game Board',
    category: 'custom',
    containers: [
        {
            $id: Now.ID['ttt_board_container'],
            name: 'Board Container',
            width: 'container',
            order: 10,
            rows: [
                {
                    $id: Now.ID['ttt_board_row'],
                    order: 10,
                    columns: [
                        {
                            $id: Now.ID['ttt_board_column'],
                            size: 12,
                            instances: [
                                {
                                    $id: Now.ID['ttt_board_instance'],
                                    widget: tttBoardWidget,
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
