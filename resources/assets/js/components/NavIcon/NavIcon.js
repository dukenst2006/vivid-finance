import CSSUtil from './../../utils/css';
import NavIconLine from './Line/Line.vue';

export default {
    data () {
        return {
            block: 'NavIcon'
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

    components: {
        'v-nav-icon-line': NavIconLine
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the nav icon
         *
         * @returns {Array} The corrected class names
         */
        navIconClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};