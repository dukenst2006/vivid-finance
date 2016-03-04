import CSSUtil from './../../utils/css';
import * as MenuGroup from './Group/Group.vue';

export default {
    data () {
        return {
            block: 'Menu'
        };
    },

    props: {
        /**
         * The groups
         */
        groups: {
            type: Array,
            required: true
        },

        /**
         * The variants
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-menu-group': MenuGroup
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the menu
         *
         * @returns {Array} The corrected class names
         */
        menuClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};