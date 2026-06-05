import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c335f2725f7d4470ba7f7015c0956c44'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '38222561d1a34c0a824c2e9f1369787b'
                    }
                    'src_server_business-rules_game-setup_js': {
                        table: 'sys_module'
                        id: '50069a47984643dd977ed05dcaa0f35a'
                    }
                    'src_server_script-includes_TicTacToeEngine_js': {
                        table: 'sys_module'
                        id: '5d0829d9ac394115a767db1a5683bca1'
                    }
                    ttt_board_column: {
                        table: 'sp_column'
                        id: 'a8e6cc4a4c0f4ea496e9d934dfe1d4ad'
                    }
                    ttt_board_container: {
                        table: 'sp_container'
                        id: 'efeed1f00c4d4b449626bd420d24e633'
                    }
                    ttt_board_instance: {
                        table: 'sp_instance'
                        id: 'd589d5d713174e6eb491076819248e79'
                    }
                    ttt_board_row: {
                        table: 'sp_row'
                        id: '281a42efca514859b536772df29591c1'
                    }
                    ttt_board_widget: {
                        table: 'sp_widget'
                        id: '9358d71ec83049e3b80e262592516935'
                    }
                    ttt_engine: {
                        table: 'sys_script_include'
                        id: 'a18c8b848d2c4fc08df0975e2f9f6a7f'
                    }
                    ttt_game_setup: {
                        table: 'sys_script'
                        id: '6f6331c461c64cc994848b9429f1a720'
                    }
                    ttt_lobby_column: {
                        table: 'sp_column'
                        id: '0c7e17a018194fc098ed16fe5879e4d1'
                    }
                    ttt_lobby_container: {
                        table: 'sp_container'
                        id: '45b555643a4445af9603c1adf756d782'
                    }
                    ttt_lobby_instance: {
                        table: 'sp_instance'
                        id: 'e79fafb204874da39328f4738394cf9e'
                    }
                    ttt_lobby_row: {
                        table: 'sp_row'
                        id: '3a20840a65d0479eb031a1740114a76a'
                    }
                    ttt_lobby_widget: {
                        table: 'sp_widget'
                        id: '7a86bcc4f3a64f6c85696a57d5ce1942'
                    }
                    ttt_portal: {
                        table: 'sp_portal'
                        id: '9f3a288baeb54a2a8a8f7f47c2067d52'
                    }
                }
                composite: [
                    {
                        table: 'sp_page'
                        id: '0215082ca27740bc97b5879d9b66abd0'
                        key: {
                            id: 'ttt-lobby'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '09733459d03b435da51829ed391d410a'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ffde9c5d8a9489a82ca24cc20773987'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'initiator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1bced6524dbf4a1fb5c834fab1dc9f0c'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22eb7d7689e04f32b0558128a02f7844'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'board'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2621e3137eab49e59c4e2b33bca0df0f'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'board'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '4d1b48c9df4e459db7a36fc6364ab203'
                        key: {
                            id: 'ttt-board'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '516f555c54a14621a0cdf80d81f892c9'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'opponent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bc25d6fe1114a4f9e95ef76d94c977f'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '809ec979293940169f77719e1fb0c5fe'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8adbd03d992f4d0eb972928d69627f5d'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'initiator'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '958c2fc742894bea8d9d02d92e897027'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f898ef184ff42b685408ab706875afb'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'current_turn'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a42352e8f1db4846a29c5692b2a140b7'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                            value: 'draw'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab09447deac34470b959bad567445d64'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'winner'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acaea9b1f1b54b4a9e8c17a6d15eea0a'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ba7386a8db72462ba98e8dbecd455867'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd802b2fd6bb4836ab389624454350e8'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c87f269792eb44a9bdb3cca4fc8d06db'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1fb4e6d104f4f62adc281f61130b556'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'opponent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e17de32cd1104e58af14ab8d626a8e07'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e441c6c46a9a4914ae2fc434f59a4ef5'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'status'
                            value: 'waiting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eebbdb1c353a4f0aa0a6971811784ee4'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'current_turn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0210533ca714d7ea62086a27292156a'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff339175b347491996244fa0e2906c88'
                        key: {
                            name: 'x_1561651_tic_tac_game'
                            element: 'winner'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
