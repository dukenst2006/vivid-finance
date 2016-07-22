<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="babel">
  import store from './store';
  import { fetchInvoices } from './store/modules/invoices/actions';
  import { fetchCustomers } from './store/modules/customers/actions';
  import { fetchAccount } from './store/modules/account/actions';

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
        fetchInvoices,
        fetchCustomers,
        fetchAccount,
      },
    },

    /**
     * Fires when the component is created
     */
    ready() {
      if (this.authenticated) {
        this.fetchCustomers();
        this.fetchInvoices();
        this.fetchAccount();
      }
    },
  };
</script>
