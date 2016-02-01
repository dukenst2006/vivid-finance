/**
 * Service which will be used for all the HTTP requests
 */
export default {
    /**
     * Method used to wrap the Vue Resource HTTP service
     *
     * @param method The given REST-type
     * @param url The given url
     * @param data The given data
     * @param successFn The given function when the request succeeded
     * @param errorFn The given function when the request failed
     * @returns {*|Promise.<T>}
     */
    request(method, url, data, successFn = null, errorFn = null) {
        return Vue.http[method](url, data).then(successFn, errorFn);
    },

    /**
     * Method used to get a resource
     *
     * @param url The given url
     * @param data The given data
     * @param successFn The given function when the request succeeded
     * @param errorFn The given function when the request failed
     * @returns {*|Promise.<T>}
     */
    get(url, data, successFn = null, errorFn = null) {
        return this.request('get', url, data, successFn, errorFn);
    },

    /**
     * Method used to post a resource
     *
     * @param url The given url
     * @param data The given data
     * @param successFn The given function when the request succeeded
     * @param errorFn The given function when the request failed
     * @returns {*|Promise.<T>}
     */
    post(url, data = {}, successFn = null, errorFn = null) {
        return this.request('post', url, data, successFn, errorFn);
    },

    /**
     * Method used to put a resource
     *
     * @param url The given url
     * @param data The given data
     * @param successFn The given function when the request succeeded
     * @param errorFn The given function when the request failed
     * @returns {*|Promise.<T>}
     */
    put(url, data, successFn = null, errorFn = null) {
        return this.request('put', url, data, successFn, errorFn);
    },

    /**
     * Method used to delete a resource
     *
     * @param url The given url
     * @param data The given data
     * @param successFn The given function when the request succeeded
     * @param errorFn The given function when the request failed
     * @returns {*|Promise.<T>}
     */
    delete(url, data = {}, successFn = null, errorFn = null) {
        return this.request('delete', url, data, successFn, errorFn);
    }
}