import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Wrapper'
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
         * corrected class names for the wrapper
         *
         * @returns {Array} The corrected class names
         */
        wrapperClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
}