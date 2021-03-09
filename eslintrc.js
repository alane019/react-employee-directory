// The example settings below tell ESLint use the eslint-plugin-react linting rules, and manually configures two rules.
// https://github.com/yannickcr/eslint-plugin-react
module.exports = {
    plugins: ["react"],
    "parser": "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    }
  };