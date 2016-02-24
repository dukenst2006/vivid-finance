import store from '../../../store'
const { getAllInvoices } = store.actions;

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
                notFound: 'No invoices yet...',
                action (customer) {
                    console.log(customer);
                }
            },
            vPagination : {
                fn : getAllInvoices
            }
        }
    },
    computed: {
        invoices () {
            return store.state.invoices.data
        },
        pagination () {
            return store.state.invoices.pagination
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
