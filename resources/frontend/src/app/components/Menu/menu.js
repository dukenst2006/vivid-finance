import BlockMixin from './../../mixins/block';
import * as VMenuGroup from './group/group.vue';

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
      block: 'menu',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The groups
     */
    groups: {
      type: Array,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VMenuGroup,
  },
};
