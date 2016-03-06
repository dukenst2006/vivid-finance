import CSSUtil from './../../utils/css';
import * as IconGroupDescription from './Description/Description.vue';
import * as IconGroupIcon from './Icon/Icon.vue';

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
        'v-icon-group-description': IconGroupDescription,
        'v-icon-group-icon': IconGroupIcon
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
