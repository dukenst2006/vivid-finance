import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'IconGroup'
        };
    },

    props: {

        /**
         * The icon
         */
        icon: {
            type: Object,
            required: true
        },

        /**
         * The description
         */
        description: {
            type: Object,
            required: true
        },

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-icon-group-description' (resolve) {
            require(['./Description/Description.vue'], resolve)
        },
        'v-icon-group-icon' (resolve) {
            require(['./Icon/Icon.vue'], resolve)
        }
    },

    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the icon group
         *
         * @returns {Array} The corrected class name
         */
        iconGroupClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};
