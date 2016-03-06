import { storeCustomer, addNotification } from './../../../vuex/actions'

export default {
    data () {
        return {
            customer: {
                name: '',
                buildingNumber: '',
                postcode: '',
                city: '',
                country: '',
                email: '',
                telephone: ''
            },

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
                        text: 'Add Customer'
                    }
                }
            ],

            panel: {
                variants: [
                    'primary'
                ],
                body: {
                    variants: [
                        'primary'
                    ]
                },
                header: {
                    variants: [
                        'primary'
                    ]
                },
                title: {
                    variants: ['primary'],
                    content: 'Add a new customer'
                }
            }
        }
    },

    vuex: {
        actions: {
            addNotification,
            storeCustomer
        }
    },

    methods: {
        addCustomer () {
            var vm = this;
            this.storeCustomer(this.customer, () => {
                this.addNotification({
                    variants: ['success'],
                    timer: {
                        variants: ['success']
                    },
                    header: {
                        variants: ['success']
                    },
                    title: {
                        variants: ['success'],
                        text: 'Success!'
                    },
                    body: {
                        variants: ['success'],
                        text: 'The customer has been created...'
                    },
                    close: {
                        variants: ['success']
                    }
                });
                vm.$router.go({
                    name: 'customer.index'
                });
            }, () => {
                this.addNotification({
                    variants: ['danger'],
                    timer: {
                        variants: ['danger']
                    },
                    header: {
                        variants: ['danger']
                    },
                    title: {
                        variants: ['danger'],
                        text: 'Error'
                    },
                    body: {
                        variants: ['danger'],
                        text: 'The customer could not be created...'
                    },
                    close: {
                        variants: ['danger']
                    }
                });
            });
        }
    },

    components: {
        'v-breadcrumb' (resolve) {
            require(['./../../../components/Breadcrumb/Breadcrumb.vue'], resolve)
        },
        'v-panel' (resolve) {
            require(['./../../../components/Panel/Panel.vue'], resolve)
        }
    }
};
