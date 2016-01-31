<!DOCTYPE html>
<html>
    <head>
        <title>Vivid Finance</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Vivid Finance">
        <meta name="description"
              content="Vivid Finance. Easy to use software to manage your finance">
        <meta name="keywords"
              content="PHP, Vivid, Finance, Laravel, Vue">
        <meta name="robots" content="index, follow">
        <meta name="revisit-after" content="1 month">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="theme-color" content="#009ade">
        <meta name="csrf-token" content="{{csrf_token()}}">

        <!-- Fav Icon Configuration -->
        <link rel="shortcut icon" href="{{ elixir('img/icons/favicon/favicon.ico') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ elixir('img/icons/favicon/favicon-16x16.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ elixir('img/icons/favicon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="96x96" href="{{ elixir('img/icons/favicon/favicon-96x96.png') }}">
        <link rel="icon" type="image/png" sizes="194x194" href="{{ elixir('img/icons/favicon/favicon-194x194.png') }}">

        <!-- Android Configuration -->
        <link rel="icon" type="image/png" sizes="192x192" href="{{ elixir('img/icons/android/android-chrome-192x192.png') }}">
        <link rel="manifest" href="{{ elixir('img/icons/android/manifest.json') }}">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Vivid Finance">

        <!-- Apple Configuration -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="#009ade">
        <meta name="apple-mobile-web-app-title" content="Vivid Finance">
        <link rel="apple-touch-icon" sizes="57x57" href="{{ elixir('img/icons/apple/apple-touch-icon-57x57.png') }}">
        <link rel="apple-touch-icon" sizes="60x60" href="{{ elixir('img/icons/apple/apple-touch-icon-60x60.png') }}">
        <link rel="apple-touch-icon" sizes="72x72" href="{{ elixir('img/icons/apple/apple-touch-icon-72x72.png') }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{ elixir('img/icons/apple/apple-touch-icon-76x76.png') }}">
        <link rel="apple-touch-icon" sizes="114x114" href="{{ elixir('img/icons/apple/apple-touch-icon-114x114.png') }}">
        <link rel="apple-touch-icon" sizes="120x120" href="{{ elixir('img/icons/apple/apple-touch-icon-120x120.png') }}">
        <link rel="apple-touch-icon" sizes="144x144" href="{{ elixir('img/icons/apple/apple-touch-icon-144x144.png') }}">
        <link rel="apple-touch-icon" sizes="152x152" href="{{ elixir('img/icons/apple/apple-touch-icon-152x152.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ elixir('img/icons/apple/apple-touch-icon-180x180.png') }}">

        <!-- Microsoft Configuration -->
        <meta name="msapplication-TileColor" content="#009ade">
        <meta name="msapplication-TileImage" content="{{ elixir('img/icons/microsoft/mstile-144x144.png') }}">
        <meta name="msapplication-config" content="{{ elixir('img/icons/microsoft/browserconfig.xml') }}">
        <meta name="msapplication-tap-highlight" content="no">

        <!-- Safari Configuration -->
        <link rel="mask-icon" href="{{ elixir('img/icons/safari/safari-pinned-tab.svg') }}" color="#009ade">
        <link rel="stylesheet" type="text/css" href="{{ elixir('css/app.css') }}"/>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ elixir('js/app.js') }}" async defer></script>
    </body>
</html>
