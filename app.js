require('dotenv').config();
var koa = require('koa');
var views = require('koa-views');
var serve = require('koa-static');
var path = require('path');
var app = new koa();

var router = require('./routes');

app.use(serve(path.join(__dirname, './dist')));
app.use(views(path.join(__dirname, '/views'), {
    map: {
        html: 'swig'
    },
    options: {
        autoescape: false
    }
}));

app.use(async (ctx, next) => {
    ctx.state = {
        spaConfig: JSON.stringify({ apiBaseUrl: process.env.API_BASE_URL || '/api/v1'})
    }
    await next();
});

app.use(router.routes());

app.listen(process.env.PORT || '3000', function () {
    console.log('Server running');
});