import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The mixins being used
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
      element: 'image',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The image source
     */
    src: {
      type: String,
      required: true,
    },
  },
};
