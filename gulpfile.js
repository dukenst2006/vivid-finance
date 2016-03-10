var elixir = require('laravel-elixir'),
    config = require('./elixir.json');

require('laravel-elixir-stylus');
require('laravel-elixir-webpack');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix
        .webpack(config.directories.javascript.input, require('./webpack.config'))
        .stylus(config.directories.stylus.input, config.directories.stylus.output)
        .copy(config.directories.metadata.input, config.directories.metadata.output)
        .copy(config.directories.images.input, config.directories.images.output)
        .copy(config.directories.fonts.input, config.directories.fonts.output)
        .version(config.version)
        .phpUnit(config.phpUnit.src, config.phpUnit.command)
        //.phpSpec()
        .browserSync({
            proxy: config.browserSync.proxy
        });
});
