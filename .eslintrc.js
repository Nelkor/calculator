module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    rules: {
        'indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': 2,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
