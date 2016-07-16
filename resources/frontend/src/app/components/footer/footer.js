import BlockMixin from './../../mixins/block';
import * as VFooterBody from './body/body.vue';
import * as VFooterHeader from './header/header.vue';

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
      block: 'footer',
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
      required: false,
    },

    /**
     * The title
     */
    title: {
      type: Object,
      required: false,
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
    VFooterBody,
    VFooterHeader,
  },

  /**
   * The computed properties
   */
  computed: {
    /**
     * Computed property which will output
     * whether there is a header or not
     *
     * @returns {boolean} If there is a header
     */
    hasHeader() {
      return !!this.header;
    },
  },
};
