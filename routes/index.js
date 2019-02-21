var Router = require('koa-router');
var api = require('./api');

var router = new Router();
router.use(api.routes());

router.get('/', async (ctx) => {
    return ctx.render('index');
});

module.exports = router;