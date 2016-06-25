import Pusher from "pusher-js";
import config from "./config/env";
import store from "./vuex/store";
import {getAllCustomers, getAllInvoices, addCustomer, checkAuthentication, login, logout} from "./vuex/actions";

export default {
    store,
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

    vuex: {
        getters: {
            user: ({user}) => user
        },
        actions: {
            getAllCustomers,
            getAllInvoices,
            checkAuthentication,
            addCustomer,
            login,
            logout
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
    methods: {
        logTheUserIn() {
            this.login();
        },
        
        logTheUserOut() {
            this.logout();
        }
    },

    created () {
        this.pusher = new Pusher(config.pusher_key, {
            encrypted: true
        });

        this.pusherChannel = this.pusher.subscribe(config.pusher_channel);

        this.checkAuthentication();

        // this.pusherChannel.bind('VividFinance\\Events\\CustomerHasBeenCreated', data => {
        //     this.addCustomer(data);
        // });
        //
        // this.pusherChannel.bind('VividFinance\\Events\\InvoiceHasBeenCreated', data => {
        //     this.getAllInvoices();
        // });
        //
        // this.getAllCustomers();
        // this.getAllInvoices();
    }
}