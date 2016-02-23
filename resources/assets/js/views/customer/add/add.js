import store from '../../../store'
const { storeCustomer } = store.actions;

export default {
    data () {
        return {
            customer: {
                name: '',
                address: '',
                buildingNumber : '',
                postcode: '',
                city: '',
                country: '',
                email: '',
                telephone: ''
            },
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
                    title: 'Add Customer'
                }
            ]
        }
    },

    methods: {
        addCustomer () {
            storeCustomer(this.customer, function() {
                console.log("Customer has been created");
            });
        }
    },

    components: {
        'v-breadcrumb' (resolve) {
            require(['./../../../components/Breadcrumb.vue'], resolve)
        }
    }
};
