import ElementMixin from './../../../mixins/element';
import * as VBreadcrumbContent from './../content/content.vue';

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
      element: 'link',
    };
  },

  props: {
    /**
     * The content
     */
    content: {
      type: Object,
      required: true,
    },

    /**
     * The route
     */
    to: {
      type: String,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VBreadcrumbContent,
  },
};
