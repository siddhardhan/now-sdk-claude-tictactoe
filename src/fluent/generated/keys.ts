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
                    ttt_active_score: {
                        table: 'par_dashboard_widget'
                        id: '9107e4281753430b98a6c10edd478ed8'
                    }
                    ttt_all_active_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '35701c713a504bd0ae03604cdd167c6b'
                    }
                    ttt_all_active_list: {
                        table: 'sys_ux_list'
                        id: '0763926357904c6f8b37bb26cedbf308'
                    }
                    ttt_all_completed_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '64d7a2a77fd2426399ba5e45b44ac81d'
                    }
                    ttt_all_completed_list: {
                        table: 'sys_ux_list'
                        id: '085d3e219da24fba9306bc9249806826'
                    }
                    ttt_all_games_category: {
                        table: 'sys_ux_list_category'
                        id: 'a842c560fc30481cb881cbc2c6a7bd1c'
                    }
                    ttt_all_open_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '55310748dd20446ca031733658ef5932'
                    }
                    ttt_all_open_list: {
                        table: 'sys_ux_list'
                        id: '799b28423a3c447e89a836462fcd1c09'
                    }
                    ttt_applicability: {
                        table: 'sys_ux_applicability'
                        id: 'aa9bd50ce6b34c5db2424cd5365dc532'
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
                    ttt_dashboard: {
                        table: 'par_dashboard'
                        id: 'a5684f4f698d44aaa00d52dc581e3301'
                    }
                    ttt_engine: {
                        table: 'sys_script_include'
                        id: 'a18c8b848d2c4fc08df0975e2f9f6a7f'
                    }
                    ttt_finished_score: {
                        table: 'par_dashboard_widget'
                        id: '620e3fd0f77f4f04bcf6d9aace48423e'
                    }
                    ttt_game_setup: {
                        table: 'sys_script'
                        id: '6f6331c461c64cc994848b9429f1a720'
                    }
                    ttt_leaderboard_column: {
                        table: 'sp_column'
                        id: '976a4832b33a4c45a8de0f4cecabd8c1'
                    }
                    ttt_leaderboard_container: {
                        table: 'sp_container'
                        id: 'c69f5910d508451dad3c0ac0e364b701'
                    }
                    ttt_leaderboard_instance: {
                        table: 'sp_instance'
                        id: '2fcaced3909345f78a0195b05b0f5a5f'
                    }
                    ttt_leaderboard_row: {
                        table: 'sp_row'
                        id: '1ab9752d5fba41708098faaa398c7f84'
                    }
                    ttt_leaderboard_widget: {
                        table: 'sp_widget'
                        id: '2f8ef94de9244f32a1ce49fb3d50a55c'
                    }
                    ttt_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: '14abdfcd62cc4ba282017725adec00d7'
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
                    ttt_my_active_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '1a4676cb8f46486d92d222acb1ab5c24'
                    }
                    ttt_my_active_list: {
                        table: 'sys_ux_list'
                        id: '80a54b2ed50048aba74d97af4fa96a61'
                    }
                    ttt_my_games_category: {
                        table: 'sys_ux_list_category'
                        id: '6d591571fb6a4bae9cf88655f1eca0e6'
                    }
                    ttt_my_history_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '366e6feb6ce047049a942bcef60d2ff4'
                    }
                    ttt_my_history_list: {
                        table: 'sys_ux_list'
                        id: 'ae0834e340c24685b1bac5e08a61dca8'
                    }
                    ttt_my_waiting_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '35654baf6570457d91e42c7c064c2cc8'
                    }
                    ttt_my_waiting_list: {
                        table: 'sys_ux_list'
                        id: '011acea895f2468ca94d54d8f824c6fb'
                    }
                    ttt_overview_tab: {
                        table: 'par_dashboard_tab'
                        id: '475ef533f3224af9b331ed14abb54869'
                    }
                    ttt_portal: {
                        table: 'sp_portal'
                        id: '9f3a288baeb54a2a8a8f7f47c2067d52'
                    }
                    ttt_status_donut: {
                        table: 'par_dashboard_widget'
                        id: 'f8eb9f430ccd4e149e59edcc4837afe0'
                    }
                    ttt_waiting_score: {
                        table: 'par_dashboard_widget'
                        id: 'eb9818294c8245a09171fad72f9ff81d'
                    }
                    ttt_winners_bar: {
                        table: 'par_dashboard_widget'
                        id: '9f487c9d81924b889473d4435a49ce29'
                    }
                    ttt_workspace: {
                        table: 'sys_ux_page_registry'
                        id: 'e0449943ac544e2dbc4c0fe73fa45890'
                    }
                    ttt_workspace_acl: {
                        table: 'sys_security_acl'
                        id: '67f5c30dfdf04e5f8da1dfdc8f8c1ce5'
                    }
                    ttt_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '0cac429f446a40e195830f64993752cf'
                    }
                    ttt_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: 'ee3ce485b91f47f3ba43061d40965621'
                    }
                    ttt_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '407fd8628e194fd8965c2483a88d0f62'
                    }
                    ttt_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '24df51b09ea14c489b44bbaf160596c6'
                    }
                    'ttt_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'af9fa828c10746ea81f7101d8550313a'
                    }
                    ttt_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: 'f4d8b4228e064625aa57053bcefb4486'
                    }
                    ttt_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '5f99eb143987400088f597d86bc47e39'
                    }
                    ttt_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: '93395f4f0505439b88c74d5c2a2832b7'
                    }
                    ttt_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '1349a48781cd4e9595fa0c8397e7c0cd'
                    }
                    ttt_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '3a6f56820d4f49349f912d03aacc3cb9'
                    }
                    ttt_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'bcbd65e8a9ba487ab74a2fe4b02426ab'
                    }
                    ttt_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '2e0d8ddc880141d59a4f2f72bd2116c6'
                    }
                    ttt_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: '3308614866cf4164b5c5499f3aeaf03a'
                    }
                    ttt_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'a794642f1a854cd486c8b54d3cedbab7'
                    }
                    ttt_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: '77a0d70465694efdabaed3ebdd270573'
                    }
                    ttt_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: 'fb11ac4b38c9465c9a9ec3918727b6cc'
                    }
                    ttt_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '020d8fca515a44858159268c077c64fb'
                    }
                    'ttt_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '4e73d836d23544dc9ce73497973b9715'
                    }
                    ttt_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '88f447b057be4a1ab2ed304df51a6ac5'
                    }
                    ttt_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: 'ce28cfbcb5194e46aff6f64f498a2fc7'
                    }
                    ttt_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '7568fca593eb40cf8f52a20a02b46547'
                    }
                    'ttt_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '907b8d38eb944250806aed726625a766'
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
                        table: 'par_dashboard_canvas'
                        id: '0254ec3c0baa447abd296fbcca50f71e'
                        key: {
                            dashboard: 'a5684f4f698d44aaa00d52dc581e3301'
                            dashboard_tab: '475ef533f3224af9b331ed14abb54869'
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
                        table: 'sp_page'
                        id: '6390d9e49eed414a943e1a595ca3b255'
                        key: {
                            id: 'ttt-leaderboard'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '714bb2ca721345daa88db1ff8246c0f9'
                        key: {
                            role: {
                                id: '88fc15cadaf64ad99e3e683b4e027738'
                                key: {
                                    name: 'x_1561651_tic_tac.player'
                                }
                            }
                            contains: {
                                id: '92f33df597a74d65abe604663afd437c'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
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
                        table: 'sys_user_role'
                        id: '88fc15cadaf64ad99e3e683b4e027738'
                        key: {
                            name: 'x_1561651_tic_tac.player'
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
                        table: 'sys_security_acl_role'
                        id: 'bbad37f91a9a429c81c529fa821b3281'
                        key: {
                            sys_security_acl: '67f5c30dfdf04e5f8da1dfdc8f8c1ce5'
                            sys_user_role: {
                                id: '88fc15cadaf64ad99e3e683b4e027738'
                                key: {
                                    name: 'x_1561651_tic_tac.player'
                                }
                            }
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
                        table: 'par_dashboard_visibility'
                        id: 'cf4c2c2121624978b9a91c6c7d579638'
                        key: {
                            dashboard: 'a5684f4f698d44aaa00d52dc581e3301'
                            experience: 'e0449943ac544e2dbc4c0fe73fa45890'
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
