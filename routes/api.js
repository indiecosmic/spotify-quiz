var _ = require('lodash');
var moment = require('moment');
var Router = require('koa-router');
var router = new Router({
    prefix: '/api/v1'
});

router.get('/sampledata/weatherforecasts', async (ctx) => {

    const summaries = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"];
    let samples = [];
    for (let i = 1; i <= 5; i++) {
        let tempC = Math.floor(Math.random() * (55 - -20) + -20);
        let tempF = 32 + Math.floor(tempC / 0.5556);
        samples.push({
            summary: _.sample(summaries),
            temperatureC: tempC,
            temperatureF: tempF,
            dateFormatted: moment().add(i, 'days').format('LL')
        });
    }
    ctx.body = samples;
});

module.exports = router;
