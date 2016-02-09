import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import {customersInitialState, customersMutations} from './modules/customers'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: customersInitialState
    },
    actions,
    mutations: [customersMutations]
});