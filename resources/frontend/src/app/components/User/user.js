import BlockMixin from './../../mixins/block';
import * as VUserFigure from './figure/figure.vue';
import * as VUserActions from './actions/actions.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The data
   * @returns {object} The data
   */
  data() {
    return {
      block: 'user',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The figure
     */
    figure: {
      type: Object,
      required: true,
    },

    /**
     * The actions
     */
    actions: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VUserFigure,
    VUserActions,
  },
};
