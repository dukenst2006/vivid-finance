import BlockMixin from './../../mixins/block';
import * as VFigureDescription from './description/description.vue';
import * as VFigureImage from './image/image.vue';

export default {
  /**
   * The mixins being used
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data object
   */
  data() {
    return {
      block: 'figure',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The image object
     */
    image: {
      type: Object,
      required: true,
    },

    /**
     * The description object
     */
    description: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VFigureDescription,
    VFigureImage,
  },
};
