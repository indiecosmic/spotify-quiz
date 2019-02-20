require('dotenv').config();
var koa = require('koa');
var views = require('koa-views');
var serve = require('koa-static');
var Router = require('koa-router');
var apiRouter = require('./routes/api')
var path = require('path');
var app = new koa();

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
        spaConfig: JSON.stringify({ apiBaseUrl: '/api/v1'})
    }
    await next();
});

var router = new Router();
router.get('/', async (ctx) => {
    return ctx.render('index');
});
app.use(router.routes());
app.use(apiRouter.routes());

app.listen(process.env.PORT || '3000', function () {
    console.log('Server running');
});