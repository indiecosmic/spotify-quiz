'use strict';

export default class Api {
    constructor(httpService) {
        this.httpService = httpService;
    }

    $get = (url, data, options) => {
        return this.httpService.get(url, data, options)
    }

    $post = (url, data, options) => {
        return this.httpService.post(url, data, options)
    }
}