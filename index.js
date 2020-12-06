module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    parser: 'babel-eslint',
    settings: {
        react: { version: 'detect' },
    },
    root: true,
    plugins: ['prettier', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'no-console': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'const',
                next: 'expression',
            },
            {
                blankLine: 'always',
                prev: 'expression',
                next: 'const',
            },
            {
                blankLine: 'always',
                prev: 'block-like',
                next: '*',
            },
        ],
    },
};
