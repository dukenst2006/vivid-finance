import ElementMixin from './../../../mixins/element';
import * as VBreadcrumbContent from './../content/content.vue';
import * as VBreadcrumbLink from './../link/link.vue';

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
      element: 'item',
    };
  },

  props: {
    /**
     * The title of the breadcrumb
     */
    content: {
      type: Object,
      required: true,
    },

    /**
     * The URL the page should go
     */
    link: {
      type: Object,
      required: false,
    },
  },

  /**
   * The components
   */
  components: {
    VBreadcrumbContent,
    VBreadcrumbLink,
  },

  /**
   * The computed properties
   */
  computed: {

    /**
     * Computed property which will output
     * whether there is a link or not
     *
     * @returns {boolean}
     */
    hasLink() {
      return !!this.link;
    },
  },
};
