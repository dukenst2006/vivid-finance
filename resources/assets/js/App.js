import Pusher from 'pusher-js'

import config from './config/env'
import store from './store'
const { getAllCustomers, getAllInvoices, addCustomer } = store.actions;

export default {
    components: {
        'v-sidebar' (resolve) {
            require(['./components/Sidebar.vue'], resolve)
        },
        'v-header' (resolve) {
            require(['./components/Header.vue'], resolve)
        },
        'v-notify' (resolve) {
            require(['./components/Notify.vue'], resolve)
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