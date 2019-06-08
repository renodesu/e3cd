const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const path = require('path')

app.use(serve(path.join(__dirname, '..')))

app.listen(3000)

const webpack = require('webpack')
const config = require('../webpack.config.dev')

const buildCallback = (err, stats) => {
  if (err || stats.hasErrors()) {
    // We had errors. Show all stats for debugging
    console.log(stats.toString({
      colors: true
    }))
    // For CI to detect the failure
  } else {
    // All went fine. Show simple output
    console.log(stats.toString({
      all: false,
      assets: true,
      colors: true
    }))
  }
}

const compiler = webpack(config)
compiler.watch({}, buildCallback)
