export default {
    data () {
        return {
            menu: {
                groups: [
                    {
                        items: [
                            {
                                to: 'customer.index',
                                iconGroup: {
                                    description: {
                                        text: 'Customers'
                                    },
                                    icon: {
                                        icon: {
                                            variants: [
                                                'account-multiple'
                                            ]
                                        },
                                        variants: [
                                            'align-right'
                                        ]
                                    }
                                }
                            },
                            {
                                to: 'invoice.index',
                                iconGroup: {
                                    description: {
                                        text: 'Invoices'
                                    },
                                    icon: {
                                        icon: {
                                            variants: [
                                                'file'
                                            ]
                                        },
                                        variants: [
                                            'align-right'
                                        ]
                                    }
                                }
                            }
                        ],
                        header: {},
                        title: {
                            text: 'Overview'
                        }
                    }
                ],
                variants: [
                    'main',
                    'sidenbar'
                ]
            },
            footer: {
                variants: [
                    'sidebar'
                ],
                header: {
                    active: true,
                    variants: [
                        'sidebar'
                    ]
                },
                title: {
                    text: 'Happy with our service?',
                    variants: [
                        'sidebar'
                    ]
                },
                body: {
                    active: true,
                    variants: [
                        'sidebar'
                    ]
                }
            }
        };
    },

    components: {
        'v-user' (resolve) {
            require(['./../User/User.vue'], resolve)
        },
        'v-menu' (resolve) {
            require(['./../Menu/Menu.vue'], resolve)
        },
        'v-footer' (resolve) {
            require(['./../Footer/Footer.vue'], resolve)
        }
    }
};