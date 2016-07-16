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
      block: 'banner',
    };
  },

  /**
   * The properties
   */
  props: {

    /**
     * The icon group
     */
    iconGroup: {
      type: Object,
      required: true,
    },
  },

  /**
   * The components
   */
  components: {
    VIconGroup(resolve) {
      require(['./../icon-group/icon-group.vue'], resolve);
    },
  },
};
