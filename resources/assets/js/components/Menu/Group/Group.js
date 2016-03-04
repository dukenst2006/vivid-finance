import CSSUtil from './../../../utils/css';
import * as MenuBody from './../Body/Body.vue';
import * as MenuHeader from './../Header/Header.vue';

export default {
    data () {
        return {
            element: 'group'
        }
    },

    props: {
        /**
         * The items
         */
        items: {
            type: Array,
            required: true
        },

        /**
         * The header
         */
        header: {
            type: Object,
            required: true
        },

        /**
         * The title
         */
        title: {
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
        'v-menu-body': MenuBody,
        'v-menu-header': MenuHeader
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
         * corrected class names for the group
         *
         * @returns {Array} The corrected class name
         */
        groupClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};