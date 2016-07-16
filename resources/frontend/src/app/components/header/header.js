import BlockMixin from './../../mixins/block';
import * as VHeaderActions from './actions/actions.vue';
import * as VHeaderSidebar from './sidebar/sidebar.vue';

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
      block: 'header',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The sidebar
     */
    sidebar: {
      type: Object,
      required: false,
    },

    /**
     * The actions
     */
    actions: {
      type: Object,
      required: false,
    },
  },

  /**
   * The components
   */
  components: {
    VHeaderActions,
    VHeaderSidebar,
  },
};
