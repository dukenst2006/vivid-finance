import store from './../../../vuex/store'
import http from './../../../services/http';
import transformer from './../../../transformers/CustomerTransformer';
import { updateCustomer, addNotification } from './../../../vuex/actions'

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
                        text: 'Edit customer'
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
                    content: 'Edit customer'
                }
            }
        }
    },

    methods: {
        editCustomer () {
            var vm = this;
            updateCustomer(this.customer, () => {
                addNotification({
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
                        text: 'The customer has been updated...'
                    },
                    close: {
                        variants: ['success']
                    }
                });
                vm.$router.go({
                    name: 'customer.index'
                });
            }, () => {
                addNotification({
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
                        text: 'The customer could not be updated...'
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
    },

    route: {
        data ({ to: { params: { customer }}}) {
            var vm = this;
            http.get('customers/' + customer, {}, (data) => {
                vm.customer = transformer.receive(data.data);
            });
        }
    }
};
