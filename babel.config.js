const config = api => {
  console.log('Babel', api.version, api.env())
  api.cache(true)

  return {
    env: {
      development: {
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: 'entry',
            corejs: 3
          }],
          '@babel/preset-react'
        ],
        plugins: [
          [
            '@babel/plugin-proposal-class-properties',
            {
              loose: true
            }
          ]
        ]
      }
    }
  }
}

module.exports = config
