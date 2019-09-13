let mix = require('laravel-mix')
let purgeCss = require('purgecss-webpack-plugin')

// Disable the mix-manifest.json file
Mix.manifest.refresh = _ => void 0

mix
  .scripts('assets/js/app.js', 'assets/js/app.min.js')
  .postCss('assets/css/style.css', 'assets/css/style.min.css', [
    require('tailwindcss'),
  ])
  .options({
      processCssUrls: false
   })

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
