import store from '../../../store'
const { getAllCustomers, setCustomerLimit } = store.actions;

export default {
    data () {
        return {
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
                notFound: 'No customers yet...',
                action (customer) {
                    console.log(customer);
                }
            },
            vPagination: {
                fn: getAllCustomers
            }
        }
    },
    computed: {
        customers () {
            return store.state.customers.data
        },
        pagination () {
            return store.state.customers.pagination
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
