import CSSUtil from './../../utils/css';
import * as TableBody from './Body/Body.vue';
import * as TableHead from './Head/Head.vue';

export default {
    data () {
        return {
            block: 'Table'
        }
    },

    props: {

        head: {
            type: Object,
            required: false
        },

        body: {
            type: Object,
            required: true
        },

        columns: {
            type: Array,
            required: true
        },

        items: {
            type: Array,
            required: true
        },

        notFound: {
            type: String,
            required: true
        },

        actions: {
            type: Array,
            required: false
        },

        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-table-body': TableBody,
        'v-table-head': TableHead
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the menu
         *
         * @returns {Array} The corrected class names
         */
        tableClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        },

        hasActions () {
            return !!this.actions;
        }
    }
};