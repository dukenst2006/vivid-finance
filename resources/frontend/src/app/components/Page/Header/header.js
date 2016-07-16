import ElementMixin from './../../../mixins/element';
import * as VPageTitle from './../title/title.vue';

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
  },

  /**
   * The components
   */
  components: {
    VPageTitle,
  },
};
