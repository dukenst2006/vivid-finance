import store from '../../../store'
const { getAllCustomers } = store.actions;

export default {
    data () {
        return {
            numberOfItems: 5,
            breadcrumb: [
                {
                    title: 'Home',
                    link: 'customer.index'
                },
                {
                    title: 'Customers',
                    link: 'customer.index'
                },
                {
                    title: 'Customer Overview'
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
    watch: {
        numberOfItems (oldValue, newValue) {
            oldValue = parseInt(oldValue);
            newValue = parseInt(newValue);

            if (oldValue !== newValue) {
                console.log(oldValue, newValue);
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
