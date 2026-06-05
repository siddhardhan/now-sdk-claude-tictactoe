import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['ttt_game_setup'],
    name: 'TTT Initialize Game',
    table: 'x_1561651_tic_tac_game',
    when: 'before',
    action: ['insert'],
    script: Now.include('../../server/business-rules/game-setup.js'),
})
