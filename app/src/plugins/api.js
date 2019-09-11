'use strict';

import axios from 'axios';
import { SampleData } from '@/services/api';

export default class Api {
    constructor(options) {
        options = options || {};

        const initOptions = {
            baseURL: options.apiBaseUrl
        }

        const axiosInstance = axios.create(initOptions);

        const httpService = {
            get: (url, data, options) => {
                let axiosOptions = {
                    ...options,
                    ...{
                        method: 'get',
                        url: url,
                        params: data
                    }
                }
                return axiosInstance(axiosOptions)
            },
            post: (url, data, options) => {
                let axiosOpt = {
                    ...options,
                    ...{
                        method: 'post',
                        url: url,
                        data: data
                    }
                }
                return axiosInstance(axiosOpt)
            }
        }

        this.api = {
            sampleData: new SampleData(httpService)
        }
    }

    registerForStore = store => {
        store.$api = this.api;
    }
}