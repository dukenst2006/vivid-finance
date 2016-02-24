import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'action'
        };
    },

    props: {
        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        },

        /**
         * The link used by v-router
         */
        link: {
            type: String,
            required: true
        },

        /**
         * The icon
         */
        icon: {
            type: Object,
            required: true
        }
    },

    components: {
        'v-icon' (resolve) {
            require(['./../../Icon/Icon.vue'], resolve)
        }
    },

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output the
         * corrected class names for the action
         *
         * @returns {Array} The corrected class names
         */
        actionClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};