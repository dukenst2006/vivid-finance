import ElementMixin from './../../../mixins/element';
import * as VHeaderAction from './../Action/Action.vue';

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
      element: 'actions',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The items
     */
    items: {
      type: Array,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VHeaderAction,
  },
};
