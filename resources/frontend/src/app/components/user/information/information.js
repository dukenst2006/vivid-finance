import ElementMixin from './../../../mixins/element';
import * as VUserHeader from './../header/header.vue';
import * as VUserBody from './../body/body.vue';

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
      element: 'information',
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
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VUserHeader,
    VUserBody,
  },
};
