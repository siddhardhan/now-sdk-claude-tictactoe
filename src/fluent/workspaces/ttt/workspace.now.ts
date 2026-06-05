import '@servicenow/sdk/global'
import { Workspace, Acl } from '@servicenow/sdk/core'
import { tttListConfig } from './list-menu.now.js'

export const tttWorkspace = Workspace({
    $id: Now.ID['ttt_workspace'],
    title: 'Tic Tac Toe',
    path: 'ttt-workspace',
    landingPath: 'home',
    tables: ['x_1561651_tic_tac_game'],
    listConfig: tttListConfig,
})

Acl({
    $id: Now.ID['ttt_workspace_acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_1561651_tic_tac.player'],
    name: 'ttt-workspace.*',
})
