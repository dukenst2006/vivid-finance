import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The mixins
   */
  mixins: [
    ElementMixin,
  ],

  /**
   *The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      element: 'icon',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The content
     */
    icon: {
      type: Object,
      required: true,
    },
  },

  components: {
    VIcon(resolve) {
      require(['./../../icon/icon.vue'], resolve);
    },
  },
};
