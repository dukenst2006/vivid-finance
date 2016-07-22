// Import node modules
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

// Application specific
import account from './modules/account';
import auth from './modules/auth';
import customers from './modules/customers';
import invoices from './modules/invoices';
import notifications from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * The modules used in the store
   */
  modules: {
    account,
    auth,
    customers,
    invoices,
    notifications,
  },

  /**
   * If strict mode should be used
   */
  strict: process.env.NODE_ENV !== 'production',

  /**
   * The middlewares
   */
  middlewares: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
