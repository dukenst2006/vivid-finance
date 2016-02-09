import Pusher from 'pusher-js'

import config from './config'
import store from './store'
const { getAllCustomers} = store.actions;

export default {
    components: {
        'v-sidebar' (resolve) {
            require(['./components/Sidebar.vue'], resolve)
        },
        'v-header' (resolve) {
            require(['./components/Header.vue'], resolve)
        }
    },
    created () {
        this.pusher = new Pusher(config.pusher_key, {
            encrypted: true
        });

        this.pusherChannel = this.pusher.subscribe(config.pusher_channel);

        this.pusherChannel.bind('VividFinance\\Events\\CustomerHasBeenCreated', data => {
            getAllCustomers();
            console.log(data);
        });

        getAllCustomers();
    }
}