import store from '../../../store'
const { getAllInvoices } = store.actions;

export default {
    data () {
        return {
            breadcrumb: [
                {
                    title: 'Home',
                    link: 'invoice.index'
                },
                {
                    title: 'Invoices',
                    link: 'invoice.index'
                },
                {
                    title: 'Invoice Overview'
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
        'v-breadcrumb' (resolve) {
            require(['./../../../components/Breadcrumb.vue'], resolve)
        },
        'v-table' (resolve) {
            require(['./../../../components/Table.vue'], resolve)
        },
        'v-pagination' (resolve) {
            require(['./../../../components/Pagination.vue'], resolve)
        }
    }
};
