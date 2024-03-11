module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  rules: {
    "vue/first-attribute-linebreak":0 
  }
}