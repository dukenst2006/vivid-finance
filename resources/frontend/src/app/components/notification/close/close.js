import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The mixins
   */
  mixins: [
    ElementMixin,
  ],

  props: {
    closeNotification: {
      type: Function,
      required: true,
    },
  },

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
};
