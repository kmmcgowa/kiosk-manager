const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current'
      }
    }
  ]
]

const plugins = [
  ["@babel/plugin-proposal-decorators", {"legacy": true}],
  ["@babel/plugin-proposal-class-properties", {"loose": true}],
]

module.exports = { presets, plugins }