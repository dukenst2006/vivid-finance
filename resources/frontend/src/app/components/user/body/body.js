import ElementMixin from './../../../mixins/element';
import * as VUserItem from './../item/item.vue';

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
    items: {
      type: Array,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VUserItem,
  },
};
