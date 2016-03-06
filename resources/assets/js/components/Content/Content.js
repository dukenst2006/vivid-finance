import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Content'
        }
    },

    props: {
        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        }
    },

    computed : {
        /**
         * Computed property which will output the
         * corrected class names for the content
         *
         * @returns {Array} The corrected class names
         */
        contentClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
}