const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const path = require('path')

app.use(serve(path.join(__dirname, '..')))

app.listen(3000)
