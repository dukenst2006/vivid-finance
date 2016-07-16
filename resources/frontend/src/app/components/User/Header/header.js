import ElementMixin from './../../../mixins/element';
import * as VUserTitle from './../title/title.vue';

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
    title: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VUserTitle,
  },
};
