var elixir = require('./elixir.json');

module.exports = {
    outputDir: config.directories.javascript.output.dir,
    output: {
        filename: config.directories.javascript.output.fileName,
        publicPath: config.directories.javascript.output.publicPath
    },

    // other options ...
    module: {
        loaders: [
            {
                // use vue-loader for *.vue files
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                // use babel-loader for *.js files
                test: /\.js$/,
                loader: 'babel',
                // important: exclude files in node_modules
                // otherwise it's going to be really slow!
                exclude: /node_modules/
            }
        ]
    },
    // if you are using babel-loader directly then
    // the babel config block becomes required.
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
};

