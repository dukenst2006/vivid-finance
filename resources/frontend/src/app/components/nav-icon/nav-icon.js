import BlockMixin from './../../mixins/block';
import * as VNavIconLine from './line/line.vue';

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
      block: 'NavIcon',
    };
  },

  /**
   * The components
   */
  components: {
    VNavIconLine,
  },
};
