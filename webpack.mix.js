let mix = require('laravel-mix')
let purgeCss = require('purgecss-webpack-plugin')

mix
  .scripts('assets/js/app.js', 'assets/js/app.min.js')
  .postCss('assets/css/style.css', 'assets/css/style.min.css', [
    require('tailwindcss'),
  ])

if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new purgeCss({
        paths: ['index.html'],
        css: ['assets/css/style.min.css'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-z0-9-:\/]+/g)
              }
            },
            extensions: ['html', 'php']
          }
        ],
      }),
    ]
  })
}
