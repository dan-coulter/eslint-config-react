module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
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
