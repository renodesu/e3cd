import webpack from 'webpack'
import config from '../webpack.config'

console.log('Generating minified bundle. This will take a moment...')

webpack(config).run((error, stats) => {
  console.log(stats.toString({
    colors: true
  }))

  // So a fatal error occurred. Stop here.
  if (error) {
    console.log(error)
    return 1
  }

  // Build succeeded
  console.log('Ready! PRODUCTION bundle under ./dist')

  return 0
})
