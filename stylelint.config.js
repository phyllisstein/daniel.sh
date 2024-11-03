const config = {
  extends: [
    '@stylistic/stylelint-config',
    'stylelint-config-recommended',
  ],
  ignoreFiles: [
    'src/styles/global/preflight.ts',
  ],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      files: ['./src/**/*.scss'],
    },
    {
      customSyntax: '@stylelint/postcss-css-in-js',
      files: ['./src/**/*.ts', './src/**/*.tsx'],
    },
  ],
  plugins: [
    '@stylistic/stylelint-plugin',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    '@stylistic/block-closing-brace-newline-before': null,
    '@stylistic/block-opening-brace-newline-before': null,
    '@stylistic/block-opening-brace-space-before': null,
    '@stylistic/color-hex-case': 'upper',
    '@stylistic/declaration-block-trailing-semicolon': null,
    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 2,
    '@stylistic/max-line-length': null,
    '@stylistic/named-grid-areas-alignment': [
      true,
      {
        alignQuotes: true,
      },
    ],
    '@stylistic/no-empty-first-line': null,
    '@stylistic/no-eol-whitespace': null,
    '@stylistic/no-missing-end-of-source-newline': null,
    '@stylistic/selector-max-empty-lines': 2,
    '@stylistic/string-quotes': 'single',

    'no-empty-source': null,

    'order/properties-order': [
      [],
      {
        emptyLineMinimumPropertyThreshold: 4,
        unspecified: 'bottom',
      },
    ],

    'plugin/rational-order': [
      true,
      {
        'empty-line-before-unspecified': 'always',
        'empty-line-between-groups': 'threshold',
        'empty-line-property-threshold': 3,
        'empty-lines-within-groups': false,
        'unspecified': 'bottomAlphabetical',
      },
    ],
  },
}

export default config
