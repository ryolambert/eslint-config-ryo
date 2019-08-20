module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },

  plugins: ['babel'],
}
