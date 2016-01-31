var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');
require('laravel-elixir-stylus');

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

elixir(function(mix) {
    var directories = {
        javascript: {
            input: 'app.js',
            output: 'public/js/app.js',
            version: 'js/app.js'
        },
        stylus: {
            input: 'vivid-finance.styl',
            output: 'public/css/app.css',
            version: 'css/app.css'
        }
    };

    var version = [
        directories.javascript.version,
        directories.stylus.version
    ];

    mix
        .browserify(directories.javascript.input, directories.javascript.output)
        .stylus(directories.stylus.input, directories.stylus.output)
        .version(version)
        .phpUnit()
        .phpSpec()
        .browserSync({
            proxy: 'vivid-finance.app'
        });
});
