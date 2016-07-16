import ElementMixin from './../../../mixins/element';
import * as VFooterTitle from './../title/title.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    ElementMixin,
  ],

  /**
   * The data
   * @returns {object} The data
   */
  data() {
    return {
      element: 'header',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The title
     */
    title: {
      type: Object,
      required: true,
    },

    /**
     * The variants used for BEM
     */
    variants: {
      type: Array,
      required: false,
    },
  },

  /**
   * The components
   */
  components: {
    VFooterTitle,
  },
};
