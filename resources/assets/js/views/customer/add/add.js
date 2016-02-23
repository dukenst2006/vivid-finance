import store from '../../../store'
const { storeCustomer, addNotification } = store.actions;

export default {
    data () {
        return {
            customer: {
                name: '',
                address: '',
                buildingNumber: '',
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
            var vm = this;
            storeCustomer(this.customer, () => {
                addNotification({
                    variants: ['success'],
                    content: 'The customer has been created!',
                    hasTimer: true
                });
                vm.$router.go({
                    name: 'customer.index'
                });
            }, () => {
                addNotification({
                    variants: ['danger'],
                    content: 'The customer could not be created...',
                    hasTimer: true
                });
            });
        }
    },

    components: {
        'v-breadcrumb' (resolve) {
            require(['./../../../components/Breadcrumb.vue'], resolve)
        }
    }
};
