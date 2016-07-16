import BlockMixin from './../../mixins/block';

export default {
  props: {
    background: {
      type: String,
      required: false,
    },
  },

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
      block: 'wrapper',
    };
  },

  computed: {
    backgroundImage() {
      return {
        'background-image': `url(${this.background})`,
      };
    },
  },
};
