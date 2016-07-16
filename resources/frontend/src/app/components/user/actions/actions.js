import ElementMixin from './../../../mixins/element';
import * as VUserAction from './../action/action.vue';

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
      required: false,
    },
  },

  /**
   * The components
   */
  components: {
    VUserAction,
  },
};
