import CSSUtil from './../../utils/css';

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
        'v-menu-group' (resolve) {
            require(['./Group/Group.vue'], resolve)
        }
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