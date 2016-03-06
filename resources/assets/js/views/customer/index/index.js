import { getAllCustomers } from './../../../vuex/actions'

export default {
    data () {
        return {
            limit: 5,
            breadcrumb: [
                {
                    content: {
                        text: 'Home'
                    },
                    link: {
                        to: 'customer.index'
                    }
                },
                {
                    content: {
                        text: 'Customers'
                    },
                    link: {
                        to: 'customer.index'
                    }
                },
                {
                    content: {
                        text: 'Customer Overview'
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
                notFound: 'No customers yet...',
                actions: [],
                variants: [
                    'primary'
                ]
            },
            vPagination: {
                fn: this.getAllCustomers
            }
        }
    },

    vuex: {
        state: {
            customers: ({customer}) => customer.data,
            pagination: ({customer}) => customer.pagination
        },
        actions: {
            getAllCustomers
        }
    },

    watch: {
        limit (newValue, oldValue) {
            if (newValue !== oldValue && newValue != this.pagination.limit) {
                this.getAllCustomers(this.pagination.current_page, newValue)
            }
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
    },

    ready () {
        this.limit = this.pagination.limit;
    }
};
