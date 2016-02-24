import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Icon'
        };
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

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the icon
         *
         * @returns {Array} The corrected class name
         */
        iconClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};
