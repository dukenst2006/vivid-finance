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
      element: 'close',
    };
  },

  props: {
    closeFunction: {
      type: Function,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
