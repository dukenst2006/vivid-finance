import Pusher from 'pusher-js'

import config from './config/env'
import store from './store'
const { getAllCustomers, getAllInvoices, addCustomer } = store.actions;

export default {
    data () {
        return {
            header: {
                sidebar: {
                    variants: []
                },
                actions: {
                    items: [
                        {
                            link: 'account.show',
                            icon: {
                                variants: [
                                    'account-circle'
                                ]
                            }
                        },
                        {
                            link: 'customer.index',
                            icon: {
                                variants: [
                                    'logout'
                                ]
                            }
                        }
                    ],
                    variants: []
                },
                variants: [
                    'main'
                ]
            },
            content: {
                variants: [
                    'main'
                ]
            }
        }
    },

    components: {
        'v-wrapper' (resolve) {
            require(['./components/Wrapper/Wrapper.vue'], resolve)
        },
        'v-content' (resolve) {
            require(['./components/Content/Content.vue'], resolve)
        },
        'v-sidebar' (resolve) {
            require(['./components/Sidebar/Sidebar.vue'], resolve)
        },
        'v-header' (resolve) {
            require(['./components/Header/Header.vue'], resolve)
        },
        'v-notification' (resolve) {
            require(['./components/Notification/Notification.vue'], resolve)
        }
    },
    created () {
        this.pusher = new Pusher(config.pusher_key, {
            encrypted: true
        });

        this.pusherChannel = this.pusher.subscribe(config.pusher_channel);

        this.pusherChannel.bind('VividFinance\\Events\\CustomerHasBeenCreated', data => {
            addCustomer(data);
        });

        this.pusherChannel.bind('VividFinance\\Events\\InvoiceHasBeenCreated', data => {
            getAllInvoices();
        });

        getAllCustomers();
        getAllInvoices();
    }
}