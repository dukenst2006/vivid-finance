import ls from 'local-storage';

/**
 * Service used to manipulate the local storage
 */
export default {
    /**
     * Method used to retrieve a value from
     * the local storage using a given key.
     *
     * @param key The given key
     * @param defaultVal The default value
     * @returns {*} The returned value
     */
    get(key, defaultVal = null) {
        var val = ls(key);

        return val ? val : defaultVal;
    },

    /**
     * Method used to set a key in the
     * local storage
     *
     * @param key The given key
     * @param val The given value
     */
    set(key, val) {
        return ls(key, val);
    },

    /**
     * Method used to remove a key from
     * the local storage
     *
     * @param key The given key
     * @returns {*} The removed key
     */
    remove(key) {
        return ls.remove(key);
    }
}