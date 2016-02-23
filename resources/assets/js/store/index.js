import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import {customersInitialState, customersMutations} from './modules/customers'
import {invoicesInitialState, invoicesMutations} from './modules/invoices'
import {notificationsInitialState, notificationsMutations} from './modules/notifications'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: customersInitialState,
        invoices: invoicesInitialState,
        notifications: notificationsInitialState
    },
    actions,
    mutations: [
        customersMutations,
        invoicesMutations,
        notificationsMutations
    ]
});