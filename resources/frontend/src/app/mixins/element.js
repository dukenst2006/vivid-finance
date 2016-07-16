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
   * The computed properties
   */
  computed: {
    /**
     * The block name
     *
     * @returns {string} The block name
     */
    block() {
      return this.$parent.block;
    },

    /**
     * Will compute the class names for the element
     *
     * @returns {Array} The class names
     */
    classNames() {
      const classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

      if (!this.contextualStyle) {
        this.contextualStyle = this.$parent.contextualStyle;
      }

      if (this.contextualStyle) {
        classes.push(
          CSSUtil.contextualClass(
            CSSUtil.has(this.block, this.element),
            this.contextualStyle
          )
        );
      }


      return classes;
    },
  },
};
