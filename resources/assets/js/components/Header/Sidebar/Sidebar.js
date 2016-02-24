// TODO: Refactor
import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'sidebar'
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
        'v-nav-icon' (resolve) {
            require(['./../../NavIcon/NavIcon.vue'], resolve)
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
         * corrected class names for the breadcrumb
         * content
         *
         * @returns {Array} The corrected class names
         */
        sidebarClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};