import { getAllInvoices } from './../../../vuex/actions'

export default {
    data () {
        return {
            breadcrumb: [
                {
                    content: {
                        text: 'Home'
                    },
                    link: {
                        to : 'invoice.index'
                    }
                },
                {
                    content: {
                        text: 'Invoices'
                    },
                    link: {
                        to : 'invoice.index'
                    }
                },
                {
                    content: {
                        text: 'Invoice Overview'
                    }
                }
            ],
            table: {
                columns: [
                    {
                        'title': 'Name',
                        'slug': 'name'
                    },
                    {
                        'title': 'Customer number',
                        'slug': 'id'
                    },
                    {
                        'title': 'Email address',
                        'slug': 'email'
                    },
                    {
                        'title': 'Phone number',
                        'slug': 'telephone'
                    }
                ],
                head: {
                    variants: [
                        'primary'
                    ],
                    row: {
                        variants: [
                            'primary',
                            'head'
                        ],
                        cell: {
                            variants: [
                                'primary',
                                'head'
                            ],
                            title: {
                                variants: []
                            },
                            sort: {
                                variants: []
                            }
                        }
                    }
                }, body: {
                    variants: [
                        'primary'
                    ],
                    row: {
                        variants: [
                            'primary',
                            'body'
                        ],
                        cell: {
                            variants: [
                                'primary',
                                'body'
                            ]
                        }
                    }
                },
                notFound: 'No invoices yet...',
                actions: [],
                variants: [
                    'primary'
                ]
            },
            vPagination : {
                fn : this.getAllInvoices
            }
        }
    },
    vuex: {
        state: {
            invoices: ({invoice}) => invoice.data,
            pagination: ({invoice}) => invoice.pagination
        },
        actions: {
            getAllInvoices
        }
    },
    components: {
        'v-icon'(resolve) {
            require(['./../../../components/Icon/Icon.vue'], resolve)
        },
        'v-icon-group'(resolve) {
            require(['./../../../components/IconGroup/IconGroup.vue'], resolve)
        },
        'v-breadcrumb' (resolve) {
            require(['./../../../components/Breadcrumb/Breadcrumb.vue'], resolve)
        },
        'v-table' (resolve) {
            require(['./../../../components/Table/Table.vue'], resolve)
        },
        'v-pagination' (resolve) {
            require(['./../../../components/Pagination/Pagination.vue'], resolve)
        }
    }
};
