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
            content: 'Dashboard',
          },
        },
      },
      breadcrumb: {
        items: [
          {
            content: {
              content: 'Dashboard',
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
