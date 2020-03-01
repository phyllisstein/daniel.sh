module.exports = api => {
  api.cache.using(() => process.env.BABEL_ENV || process.env.NODE_ENV || 'development')

  const presets = [
    [require.resolve('@babel/preset-env'), {
      corejs: {
        proposals: true,
        version: 2,
      },
      exclude: [
        'transform-async-to-generator',
        'transform-regenerator',
        'transform-typeof-symbol',
      ],
      forceAllTransforms: false,
      loose: true,
      modules: false,
      targets: 'last 2 years',
      useBuiltIns: 'usage',
    }],
    [require.resolve('@babel/preset-react'), {
      development: !api.env('production'),
      useBuiltIns: true,
    }],
    require.resolve('@babel/preset-typescript'),
  ]

  const plugins = [
    require.resolve('@babel/plugin-proposal-async-generator-functions'),
    [require.resolve('@babel/plugin-proposal-class-properties'), {
      loose: true,
    }],
    [require.resolve('@babel/plugin-proposal-decorators'), {
      decoratorsBeforeExport: true,
    }],
    require.resolve('@babel/plugin-proposal-do-expressions'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-proposal-function-bind'),
    require.resolve('@babel/plugin-proposal-function-sent'),
    require.resolve('@babel/plugin-proposal-json-strings'),
    require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
    [require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'), {
      loose: true,
    }],
    require.resolve('@babel/plugin-proposal-numeric-separator'),
    [require.resolve('@babel/plugin-proposal-object-rest-spread'), {
      loose: true,
      useBuiltIns: true,
    }],
    require.resolve('@babel/plugin-proposal-optional-catch-binding'),
    [require.resolve('@babel/plugin-proposal-optional-chaining'), {
      loose: true,
    }],
    require.resolve('@babel/plugin-proposal-partial-application'),
    [require.resolve('@babel/plugin-proposal-pipeline-operator'), {
      proposal: 'smart'
    }],
    [require.resolve('@babel/plugin-proposal-private-methods'), {
      loose: true,
    }],
    require.resolve('@babel/plugin-proposal-throw-expressions'),
    require.resolve('@babel/plugin-proposal-unicode-property-regex'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-react-jsx-source'),
    [require.resolve('@babel/plugin-transform-regenerator'), {
      async: false,
      asyncGenerators: true,
      generators: true,
    }],
    [require.resolve('babel-plugin-inline-react-svg'), {
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
    require.resolve('babel-plugin-macros'),
    [require.resolve('babel-plugin-styled-components'), {
      minify: api.env('production'),
      pure: api.env('production'),
      transpileTemplateLiterals: api.env('production'),
    }],
    api.env('development') ? require.resolve('@babel/plugin-transform-react-display-name') : null,
    api.env('development')
      ? [require.resolve('babel-plugin-meaningful-logs'), {
        maxDepth: 2,
      }]
      : null,
    api.env('development') ? require.resolve('react-hot-loader/babel') : null,
    api.env('production') ? require.resolve('@babel/plugin-transform-react-constant-elements') : null,
    api.env('production') ? require.resolve('@babel/plugin-transform-react-inline-elements') : null,
    api.env('production') ? require.resolve('babel-plugin-remove-prop-types') : null,
    api.env('production') ? require.resolve('babel-plugin-react-local') : null,
    require.resolve('babel-plugin-lodash'),
    [require.resolve('babel-plugin-ramda'), {
      useES: true,
    }],
    ['module:fast-async', {
      compiler: {
        lazyThenables: true,
        parser: {
          sourceType: 'module',
        },
        promises: true,
        wrapAwait: true,
      },
      useRuntimeModule: true,
    }],
  ].filter(Boolean)

  return {
    presets,
    plugins,
  }
}
