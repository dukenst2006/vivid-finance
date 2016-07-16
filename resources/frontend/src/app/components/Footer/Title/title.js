import ElementMixin from './../../../mixins/element';

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
      element: 'title',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The title text
     */
    text: {
      type: String,
      required: true,
    },
  },
};
