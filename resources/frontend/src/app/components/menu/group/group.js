import ElementMixin from './../../../mixins/element';
import * as VMenuBody from './../body/body.vue';
import * as VMenuHeader from './../header/header.vue';

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
      element: 'group',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The items
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The header
     */
    header: {
      type: Object,
      required: true,
    },

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
    VMenuBody,
    VMenuHeader,
  },
};
