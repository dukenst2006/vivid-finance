import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import {customersInitialState, customersMutations} from './modules/customers'
import {invoicesInitialState, invoicesMutations} from './modules/invoices'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: customersInitialState,
        invoices: invoicesInitialState
    },
    actions,
    mutations: [customersMutations, invoicesMutations]
});