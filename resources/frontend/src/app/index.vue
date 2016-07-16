<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="babel">
  import store from './store';
  import { receiveInvoices } from './store/modules/invoices/actions';
  import { receiveCustomers } from './store/modules/customers/actions';
  import { receiveAccount } from './store/modules/account/actions';

  export default {
    /**
     * The store
     */
    store,

    /**
     * Vuex
     */
    vuex: {
      getters: {
        authenticated: ({ auth }) => auth.authenticated,
      },
      actions: {
        receiveInvoices,
        receiveCustomers,
        receiveAccount,
      },
    },

    /**
     * Fires when the component is created
     */
    ready() {
      if (this.authenticated) {
        this.receiveCustomers();
        this.receiveInvoices();
        this.receiveAccount();
      }
    },
  };
</script>
