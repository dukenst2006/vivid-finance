import ElementMixin from './../../../mixins/element';
import CSSUtil from './../../../utils/css';

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
      element: 'item',
    };
  },

  /**
   * The properties
   */
  props: {
    /**
     * The to for the link
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
      require(['./../../icon-group/icon-group.vue'], resolve);
    },
  },


  computed: {
    /**
     * Computed property which will output the
     * active class name for the item
     *
     * @returns {string}
     */
    itemActiveClass() {
      return CSSUtil.variant(CSSUtil.has(this.block, this.element), 'active');
    },
  },
};
