import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1561651_tic_tac_game = Table({
    name: 'x_1561651_tic_tac_game',
    label: 'Tic Tac Toe Game',
    schema: {
        title: StringColumn({
            label: 'Title',
            maxLength: 100,
        }),
        initiator: ReferenceColumn({
            label: 'Initiator (X)',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        opponent: ReferenceColumn({
            label: 'Opponent (O)',
            referenceTable: 'sys_user',
        }),
        board: StringColumn({
            label: 'Board State',
            maxLength: 9,
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: [
                { label: 'Waiting for Opponent', value: 'waiting' },
                { label: 'In Progress',          value: 'in_progress' },
                { label: 'Completed',            value: 'completed' },
                { label: 'Draw',                 value: 'draw' },
            ],
        }),
        winner: ReferenceColumn({
            label: 'Winner',
            referenceTable: 'sys_user',
        }),
        current_turn: ReferenceColumn({
            label: 'Current Turn',
            referenceTable: 'sys_user',
        }),
    },
})
