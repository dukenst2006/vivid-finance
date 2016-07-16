import BlockMixin from './../../mixins/block';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'featured',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * Location for redirection
     */
    to: {
      type: String,
      required: true,
    },

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
