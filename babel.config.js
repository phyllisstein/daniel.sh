module.exports = api => {
  api.cache.using(() => process.env.BABEL_ENV || process.env.NODE_ENV || 'development')

  const isWebpackBuild = api.caller(caller => !!(caller && caller.name === 'babel-loader'))

  const presets = [
    ['@babel/env', {
      corejs: {
        proposals: true,
        version: 3,
      },
      forceAllTransforms: true,
      loose: true,
      modules: isWebpackBuild ? false : 'commonjs',
      targets: 'last 2 years',
      useBuiltIns: 'usage',
    }],
    ['@babel/react', {
      development: !api.env('production'),
      useBuiltIns: true,
    }],
  ]

  const plugins = [
    '@babel/proposal-async-generator-functions',
    ['@babel/proposal-class-properties', {
      loose: true,
    }],
    ['@babel/proposal-decorators', {
      decoratorsBeforeExport: true,
    }],
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-function-sent',
    '@babel/proposal-json-strings',
    '@babel/proposal-logical-assignment-operators',
    ['@babel/proposal-nullish-coalescing-operator', {
      loose: true,
    }],
    '@babel/proposal-numeric-separator',
    ['@babel/proposal-object-rest-spread', {
      loose: true,
      useBuiltIns: true,
    }],
    '@babel/proposal-optional-catch-binding',
    ['@babel/proposal-optional-chaining', {
      loose: true,
    }],
    '@babel/proposal-pattern-matching',
    '@babel/proposal-partial-application',
    ['@babel/proposal-pipeline-operator', {
      proposal: 'smart',
    }],
    ['@babel/proposal-private-methods', {
      loose: true,
    }],
    '@babel/proposal-throw-expressions',
    '@babel/proposal-unicode-property-regex',
    '@babel/syntax-dynamic-import',
    '@babel/transform-react-jsx-source',
    'lodash',
    'macros',
    // ['meaningful-logs', {
    //   maxDepth: 2,
    // }],
    ['ramda', {
      useES: isWebpackBuild,
    }],
    ['styled-components', {
      minify: api.env('production'),
      pure: api.env('production'),
      transpileTemplateLiterals: api.env('production'),
    }],
    api.env('development') ? '@babel/plugin-transform-react-display-name' : null,
    api.env('production') ? '@babel/plugin-transform-react-constant-elements' : null,
    api.env('production') ? '@babel/plugin-transform-react-inline-elements' : null,
  ].filter(Boolean)

  return {
    plugins,
    presets,
  }
}
