module.exports = api => {
  api.cache.using(() => process.env.BABEL_ENV || process.env.NODE_ENV || 'development')

  const presets = [
    ['@babel/env', {
      corejs: {
        proposals: true,
        version: 2,
      },
      forceAllTransforms: false,
      loose: true,
      modules: false,
      targets: 'last 2 years',
      useBuiltIns: 'usage',
    }],
    ['@babel/react', {
      development: !api.env('production'),
      useBuiltIns: true,
    }],
    '@babel/typescript',
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
    ['inline-react-svg', {
      svgo: {
        plugins: [
          { cleanupAttrs: true },
          { cleanupListOfValues: true },
          { cleanupNumericValues: true },
          { collapseGroups: true },
          { convertPathData: true },
          { convertShapeToPath: true },
          { convertTransform: true },
          { mergePaths: true },
          { removeComments: true },
          { removeDoctype: true },
          { removeEditorsNSData: true },
          { removeEmptyAttrs: true },
          { removeEmptyContainers: true },
          { removeEmptyText: true },
          { removeHiddenElems: true },
          { removeMetadata: true },
          { removeNonInheritableGroupAttrs: true },
          { removeRasterImages: true },
          { removeScriptElement: true },
          { removeUnknownsAndDefaults: true },
          { removeUnusedNS: true },
          { removeUselessDefs: true },
          { removeUselessStrokeAndFill: true },
          { removeXMLNS: true },
          { removeXMLProcInst: true },
        ],
      },
    }],
    'lodash',
    'macros',
    ['styled-components', {
      minify: api.env('production'),
      pure: api.env('production'),
      transpileTemplateLiterals: api.env('production'),
    }],
    api.env('development') ? '@babel/plugin-transform-react-display-name' : null,
    api.env('development')
      ? ['meaningful-logs', {
        maxDepth: 2,
      }]
      : null,
    api.env('development') ? 'react-hot-loader/babel' : null,
    api.env('production') ? '@babel/plugin-transform-react-constant-elements' : null,
    api.env('production') ? '@babel/plugin-transform-react-inline-elements' : null,
    api.env('production') ? 'react-local' : null,
  ].filter(Boolean)

  return {
    plugins,
    presets,
  }
}
