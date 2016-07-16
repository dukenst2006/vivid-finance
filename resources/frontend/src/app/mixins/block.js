import CSSUtil from './../utils/css';
import StyleMixin from './style';

export default {
  /**
   * The mixins being used
   */
  mixins: [
    StyleMixin,
  ],

  /**
   * Computed properties
   */
  computed: {
    /**
     * Will compute the class names for the block
     *
     * @returns {Array} The class names
     */
    classNames() {
      const classes = CSSUtil.blockClasses(this.block, this.variants);

      if (this.contextualStyle) {
        classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));
      }

      return classes;
    },
  },
};
