const Koa = require('koa');
const app = new Koa();
const PORT = 4000;

app.use(async (ctx, next) => {
    console.log(ctx.method);
    return await next();
});

app.use(async (ctx, next) => {
    console.log('2nd middleware');
    return await next();
});

app.use(async ctx =>{
    ctx.body = 'hello world!';
});

app.listen(PORT);
console.log('Server is listening port 4000');