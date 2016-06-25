import Vue from 'vue';
import Vuex from 'vuex';

import customer from './modules/customer';
import invoice from './modules/invoice';
import notification from './modules/notification';
import user from './modules/user';

import config from './../config/env';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        customer,
        invoice,
        notification,
        user
    },
    strict: config.debug
});