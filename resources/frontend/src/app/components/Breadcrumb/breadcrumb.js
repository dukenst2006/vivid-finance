import BlockMixin from './../../mixins/block';
import * as VBreadcrumbItem from './item/item.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'breadcrumb',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The items to be displayed
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
    VBreadcrumbItem,
  },
};
