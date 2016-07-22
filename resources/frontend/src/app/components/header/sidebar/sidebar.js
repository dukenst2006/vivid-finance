import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The mixins being used
   */
  mixins: [
    ElementMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data object
   */
  data() {
    return {
      element: 'sidebar',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The figure
     */
    figure: {
      type: Object,
      required: true,
    },

    /**
     * The nav icon
     */
    navIcon: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VNavIcon(resolve) {
      require(['./../../nav-icon/nav-icon.vue'], resolve);
    },
    VFigure(resolve) {
      require(['./../../figure/figure.vue'], resolve);
    },
  },
};
