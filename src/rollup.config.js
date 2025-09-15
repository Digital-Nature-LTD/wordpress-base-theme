export default [
    {
        input: 'js/frontend/frontend.js',
        output: {
            file: '../public/assets/js/frontend/digital-nature-frontend.js',
            format: 'umd',
            name: 'digital-nature-frontend',
            sourcemap: true
        },
        plugins: [],
        external: []
    },
    {
        input: 'js/editor/editor.js',
        output: {
            file: '../public/assets/js/editor/digital-nature-editor.js',
            format: 'esm',
            name: 'digital-nature-editor',
            sourcemap: true
        },
        plugins: [],
        external: []
    },
];