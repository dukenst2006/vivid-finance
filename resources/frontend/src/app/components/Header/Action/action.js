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
      element: 'action',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * Where v-router should link to
     */
    to: {
      type: String,
      required: false,
    },

    /**
     * The action
     */
    action: {
      type: Function,
      required: false,
    },

    /**
     * The icon
     */
    icon: {
      type: Object,
      required: true,
    },
  },

  /**
   * Computed properties
   */
  computed: {
    /**
     * Whether the action has a to attribute
     *
     * @returns {boolean} Whether the action has a to attribute
     */
    hasTo() {
      return !!this.to;
    },

    /**
     * Whether the action has an action attribute
     *
     * @returns {boolean} Whether the action has an action attribute
     */
    hasAction() {
      return !!this.action;
    },
  },

  /**
   * The components
   */
  components: {
    VIcon(resolve) {
      require(['./../../icon/icon.vue'], resolve);
    },
  },
};
