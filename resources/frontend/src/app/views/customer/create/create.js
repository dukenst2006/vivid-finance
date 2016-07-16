export default {
  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      page: {
        header: {
          title: {
            content: 'Create a Customer',
          },
        },
      },
      breadcrumb: {
        items: [
          {
            content: {
              content: 'Dashboard',
            },
            link: {
              to: 'dashboard.index',
            },
          },
          {
            content: {
              content: 'Customers',
            },
            link: {
              to: 'customer.index',
            },
          },
          {
            content: {
              content: 'Create a Customer',
            },
          },
        ],
      },
    };
  },

  /**
   * The components
   */
  components: {
    VPage(resolve) {
      require(['./../../../components/page/page.vue'], resolve);
    },
    VBreadcrumb(resolve) {
      require(['./../../../components/breadcrumb/breadcrumb.vue'], resolve);
    },
    VLayout(resolve) {
      require(['../../../layouts/default/default.vue'], resolve);
    },
  },
};
