import BlockMixin from './../../mixins/block';
import * as VPanelBody from './body/body.vue';
import * as VPanelHeader from './header/header.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

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
     * The body
     */
    body: {
      type: Object,
      required: true,
    },

    /**
     * The title
     */
    title: {
      type: Object,
      required: false,
    },
  },

  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'panel',
    };
  },

  /**
   * The components
   */
  components: {
    VPanelBody,
    VPanelHeader,
  },

  /**
   * The computed properties
   */
  computed: {
    /**
     * If the panel has an header
     *
     * @returns {boolean} If the panel has an header
     */
    hasHeader() {
      return !!(this.header || this.title);
    },
  },
};
