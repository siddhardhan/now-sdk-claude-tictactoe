import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['ttt_engine'],
    name: 'TicTacToeEngine',
    clientCallable: true,
    script: Now.include('../../server/script-includes/TicTacToeEngine.js'),
})
