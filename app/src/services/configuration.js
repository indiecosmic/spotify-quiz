'use strict';

const $window = window;

export default {
    debug: process.env.NODE_ENV !== 'production',
    spaConfig: $window.spaConfig || {
        apiBaseUrl: process.env.VUE_API_BASE_URL
    }
}