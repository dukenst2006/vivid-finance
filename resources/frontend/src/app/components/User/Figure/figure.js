import ElementMixin from './../../../mixins/element';
import * as VUserImage from './../image/image.vue';
import * as VUserInformation from './../information/information.vue';

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
      element: 'figure',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The image
     */
    image: {
      type: Object,
      required: true,
    },

    /**
     * The information
     */
    information: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VUserImage,
    VUserInformation,
  },
};
