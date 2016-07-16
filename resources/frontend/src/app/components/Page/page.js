import BlockMixin from './../../mixins/block';
import * as VPageBody from './Body/Body.vue';
import * as VPageHeader from './Header/Header.vue';


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
      block: 'page',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The header
     */
    header: {
      type: Object,
      required: true,
    },

    /**
     * The body
     */
    body: {
      type: Object,
      required: false,
    },
  },

  /**
   * The components
   */
  components: {
    VPageHeader,
    VPageBody,
  },
};
