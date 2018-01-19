// rollup.config.js
export default [{
    input: 'index.js',
    output: {
        file: 'build/d3-clone.js',
        format: 'umd',
        name: 'd3',
        globals: {
        	'd3-selection': 'd3'
        },
        extend: true
    }
}];