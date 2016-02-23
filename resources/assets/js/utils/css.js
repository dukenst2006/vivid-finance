export default {
    /**
     * The element separator
     */
    elementSeparator: '__',

    /**
     * The modifier separator
     */
    modifierSeparator: '--',

    /**
     *
     * @param element
     * @param classes
     */
    computedClass (element, classes) {

    },

    /**
     * Method which transform an element to a BEM-element
     *
     * @param block The name of the block
     * @param element The name of the element
     * @returns {string} The corrected class
     */
    has(block, element) {
        return block + this.elementSeparator + element;
    },

    /**
     * Method which transforms an item to a BEM-modifier
     *
     * @param item The name of the item
     * @param variant The name of the variant
     * @returns {string} The corrected class
     */
    variant(item, variant) {
        return item + this.modifierSeparator + variant;
    },

    /**
     * Method which will transform an item to an array of BEM-modifiers
     *
     * @param item The name of the item
     * @param variants The array variants
     */
    variants(item, variants) {
        var tempArray = [];

        variants.forEach((variant) => {
            tempArray.push(this.variant(item, variant));
        });

        return tempArray;
    },

    /**
     *
     * @param block
     * @param variants
     * @returns {Array}
     */
    blockClasses (block, variants) {
        var classNames = [],
            modifiers = [];

        classNames.push(block);

        if (variants) {
            modifiers = this.variants(block, variants);
            classNames = classNames.concat(modifiers);
        }

        return classNames;
    },

    /**
     *
     * @param block
     * @param element
     * @param variants
     * @returns {Array}
     */
    elementClasses (block, element, variants) {
        var classNames = [],
            modifiers = [];
        var elementClass = this.has(block, element);

        classNames.push(elementClass);

        if (variants) {
            modifiers = this.variants(elementClass, variants);
            classNames = classNames.concat(modifiers);
        }

        return classNames;
    }
}