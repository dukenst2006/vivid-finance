import CSSUtil from './../../../utils/css';
import * as TableRow from './../Row/Row.vue';

export default {
    data () {
        return {
            element: 'head'
        }
    },

    props: {

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        },

        columns: {
            type: Array,
            required: true
        },

        hasActions: {
            type: Boolean,
            required: true
        },

        row: {
            type: Object,
            required: true
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
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        headClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    },

    components: {
        'v-table-row': TableRow
    }
};