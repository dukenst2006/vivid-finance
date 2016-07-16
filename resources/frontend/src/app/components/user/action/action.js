import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The mixins
   */
  mixins: [
    ElementMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data
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
     * Where the action should point to
     */
    to: {
      type: String,
      required: false,
    },

    /**
     * The action to be fired
     */
    action: {
      type: Function,
      required: false,
    },

    /**
     * The icon group
     */
    iconGroup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    hasTo() {
      return !!this.to;
    },
    hasAction() {
      return !!this.action;
    },
  },

  /**
   * The components
   */
  components: {
    VIconGroup(resolve) {
      require(['./../../icon-group/icon-group.vue'], resolve);
    },
  },
};
