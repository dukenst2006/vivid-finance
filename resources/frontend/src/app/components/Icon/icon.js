import BlockMixin from './../../mixins/block';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   *The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'icon',
    };
  },
};
