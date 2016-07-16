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
      element: 'description',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The image source
     */
    content: {
      type: String,
      required: true,
    },
  },
};
