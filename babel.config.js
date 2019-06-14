module.exports = api => {
  api.cache.using(() => process.env.BABEL_ENV || process.env.NODE_ENV || 'development')

  const isBabelWebpack = api.caller(caller => !!(caller && caller.name === 'babel-webpack'))

  const presets = [
    ['@babel/env', {
      corejs: {
        proposals: true,
        version: 3,
      },
      modules: isBabelWebpack ? false : 'commonjs',
      targets: 'last 2 years',
      useBuiltIns: 'usage',
    }],
    ['@babel/react', {
      development: !api.env('production'),
      useBuiltIns: true,
    }],
    ['@emotion/css-prop', {
      labelFormat: '[dirname]-[filename]__[local]',
      useBuiltIns: true,
    }],
  ]

  const plugins = [
    '@babel/proposal-async-generator-functions',
    ['@babel/proposal-decorators', {
      legacy: true,
    }],
    ['@babel/proposal-class-properties', {
      loose: true,
    }],
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-logical-assignment-operators',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-optional-chaining',
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
    ['meaningful-logs', {
      maxDepth: 2,
    }],
    ['ramda', {
      useES: isBabelWebpack,
    }],
    ['styled-components', {
      minify: api.env('production'),
      pure: api.env('production'),
      transpileTemplateLiterals: api.env('production'),
    }],
  ]

  return {
    plugins,
    presets,
  }
}
