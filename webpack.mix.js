let mix = require('laravel-mix')

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
  .browserSync({
    proxy: 'sarabine.com.test',
    files: [
      'index.html',
      'assets/css/style.css',
      'assets/js/app.js',
    ]
  })
