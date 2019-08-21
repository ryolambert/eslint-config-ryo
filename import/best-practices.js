module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'global-require': 'off', // disable because no need to have both!
    'import/first': 'error',
    // hmm... this rule appears to be an alias to import/first... But I gotta configure them allllllll!
    'import/imports-first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-deprecated': 'warn', // this is an in progress rule
    'import/no-duplicates': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-unused-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
  },
};
