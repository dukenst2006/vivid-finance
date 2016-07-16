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
      element: 'item',
    };
  },

  /**
   * The properties
   */
  props: {
    content: {
      type: String,
      required: false,
    },
  },
};
