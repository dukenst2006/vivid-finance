import ElementMixin from './../../../mixins/element';
import * as VMenuItem from './../item/item.vue';

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
      element: 'body',
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
    VMenuItem,
  },
};
