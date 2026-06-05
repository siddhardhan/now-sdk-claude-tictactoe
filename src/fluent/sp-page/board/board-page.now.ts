import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'

export const tttBoardPage = SPPage({
    pageId: 'ttt-board',
    title: 'Game Board',
    category: 'custom',
})
