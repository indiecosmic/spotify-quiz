'use strict';
import Api from './api';
export default class SampleData extends Api {
    constructor(httpService) {
        super(httpService);
    }
    get getWeatherForcasts() {
        return this.$get('SampleData/WeatherForecasts')
    }
}