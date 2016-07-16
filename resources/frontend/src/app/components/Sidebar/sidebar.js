import BlockMixin from './../../mixins/block';

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
      block: 'sidebar',
    };
  },
};
