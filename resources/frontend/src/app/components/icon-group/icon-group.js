import BlockMixin from './../../mixins/block';
import * as VIconGroupDescription from './description/description.vue';
import * as VIconGroupIcon from './icon/icon.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   *The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'icon-group',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The icon
     */
    icon: {
      type: Object,
      required: true,
    },

    /**
     * The description
     */
    description: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VIconGroupDescription,
    VIconGroupIcon,
  },
};
