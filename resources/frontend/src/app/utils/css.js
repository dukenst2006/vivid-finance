export default {
  /**
   * The accepted conceptual types
   */
  contextualTypes: [
    'danger',
    'info',
    'primary',
    'success',
    'warning',
    'dark',
  ],

  /**
   * The separator for the element
   *
   * @returns {string} The seperator
   */
  elementSeparator() {
    return '__';
  },

  /**
   * The separator for the modifier
   *
   * @returns {string} The separator
   */
  modifierSeparator() {
    return '--';
  },

  /**
   * The contextual classes
   *
   * @param {string} element The element
   * @param {string} classType The class type
   *
   * @returns {string} The corrected class type
   */
  contextualClass(element, classType) {
    let contextualClass;

    if (classType && this.contextualTypes.indexOf(classType.toLowerCase()) !== -1) {
      contextualClass = this.variant(element, classType);
    }

    return contextualClass;
  },

  /**
   * Will return the corrected element class
   *
   * @param {string} block The block name
   * @param {string} element The element name
   *
   * @returns {string} The corrected element
   */
  has(block, element) {
    return block + this.elementSeparator() + element;
  },

  /**
   * Will return the corrected modifier class
   *
   * @param {string} item The item. Can be a block or an element.
   * @param {string} variant The variant
   *
   * @returns {string} The corrected variant
   */
  variant(item, variant) {
    return item + this.modifierSeparator() + variant;
  },

  /**
   * Will return all the variants
   *
   * @param {string} item The item. Can be a block or an element
   * @param {Array} variants The variants
   *
   * @returns {Array} The corrected variants
   */
  variants(item, variants) {
    const tempArray = [];

    variants.forEach((variant) => {
      tempArray.push(this.variant(item, variant));
    });

    return tempArray;
  },

  /**
   * Will return all the block classes
   *
   * @param {string} block The block name
   * @param {Array} variants The variants
   *
   * @returns {Array} The block classes
   */
  blockClasses(block, variants) {
    let classNames = [];
    let modifiers = [];

    classNames.push(block);

    if (variants) {
      modifiers = this.variants(block, variants);
      classNames = classNames.concat(modifiers);
    }

    return classNames;
  },

  /**
   * Will return all the element classes
   *
   * @param {string} block The block name
   * @param {string} element The element
   * @param {Array} variants The variants
   *
   * @returns {Array} The element classes
   */
  elementClasses(block, element, variants) {
    let classNames = [];
    let modifiers = [];
    const elementClass = this.has(block, element);

    classNames.push(elementClass);

    if (variants) {
      modifiers = this.variants(elementClass, variants);
      classNames = classNames.concat(modifiers);
    }

    return classNames;
  },
};
