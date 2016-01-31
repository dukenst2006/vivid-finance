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
            input: 'main.js',
            output: 'public/js/app.js'
        },
        stylus: {
            input: 'vivid-finance.styl',
            output: 'public/css/app.css'
        },
        images : {
            input : 'resources/assets/img',
            output : 'public/img'
        }
    };

    var version = [
        // CSS
        'css/app.css',

        // JS
        'js/app.js',

        // Fav Icons
        'img/icons/favicon/favicon.ico',
        'img/icons/favicon/favicon-16x16.png',
        'img/icons/favicon/favicon-32x32.png',
        'img/icons/favicon/favicon-96x96.png',
        'img/icons/favicon/favicon-194x194.png',

        // Android Icons
        'img/icons/android/android-chrome-36x36.png',
        'img/icons/android/android-chrome-48x48.png',
        'img/icons/android/android-chrome-72x72.png',
        'img/icons/android/android-chrome-96x96.png',
        'img/icons/android/android-chrome-144x144.png',
        'img/icons/android/android-chrome-192x192.png',
        'img/icons/android/manifest.json',

        // Apple Icons
        'img/icons/apple/apple-touch-icon.png',
        'img/icons/apple/apple-touch-icon-57x57.png',
        'img/icons/apple/apple-touch-icon-60x60.png',
        'img/icons/apple/apple-touch-icon-72x72.png',
        'img/icons/apple/apple-touch-icon-76x76.png',
        'img/icons/apple/apple-touch-icon-114x114.png',
        'img/icons/apple/apple-touch-icon-120x120.png',
        'img/icons/apple/apple-touch-icon-144x144.png',
        'img/icons/apple/apple-touch-icon-152x152.png',
        'img/icons/apple/apple-touch-icon-180x180.png',
        'img/icons/apple/apple-touch-icon-precomposed.png',

        // Microsoft Icons
        'img/icons/microsoft/mstile-70x70.png',
        'img/icons/microsoft/mstile-144x144.png',
        'img/icons/microsoft/mstile-150x150.png',
        'img/icons/microsoft/mstile-310x150.png',
        'img/icons/microsoft/mstile-310x310.png',
        'img/icons/microsoft/browserconfig.xml',

        // Safari Icons
        'img/icons/safari/safari-pinned-tab.svg',

        // Logos
        'img/logo/logo.svg'
    ];

    mix
        .browserify(directories.javascript.input, directories.javascript.output)
        .stylus(directories.stylus.input, directories.stylus.output)
        .copy(directories.images.input, directories.images.output)
        .version(version)
        .phpUnit()
        .phpSpec()
        .browserSync({
            proxy: 'vivid-finance.app'
        });
});
