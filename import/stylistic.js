module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/extensions': 'error',
    'import/newline-after-import': 'off',
    'import/no-named-as-default': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ]
    // 'organize-imports/organize-imports': ['error', {
    //   'orderRules': [{
    //     'moduleType': 'nodeModule',
    //     'comment': 'vendor modules'
    //   }, {
    //     'moduleType': 'testModule',
    //     'comment': 'test modules',
    //     'include': ['src/test/'],
    //     'exclude':  ['src/test/utils']
    //   }, {
    //     'moduleType': 'utilityModule',
    //     'comment': 'utility modules',
    //     'include': [
    //       'src/shared/constants',
    //       'src/+(shared|server|test)/utils',
    //       'src/server/mock-data'
    //     ]
    //   }],
    //   'pathAliases': [{
    //     'prefix': '<shared>',
    //     'resolvesTo': './src/shared'
    //   }]
    // }]
  },
};
