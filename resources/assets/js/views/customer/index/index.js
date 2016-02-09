import store from '../../../store'

export default {
    data () {
        return {
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
                        'title' : 'Name',
                        'slug' : 'name'
                    },
                    {
                        'title' : 'Customer number',
                        'slug' : 'id'
                    },
                    {
                        'title' : 'Email address',
                        'slug' : 'email'
                    },
                    {
                        'title' : 'Phone number',
                        'slug' : 'telephone'
                    }
                ],
                notFound : 'No customers yet...',
                action (customer) {
                    console.log(customer);
                }
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
        }
    }
};
