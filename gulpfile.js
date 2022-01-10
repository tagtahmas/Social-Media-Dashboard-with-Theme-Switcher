// Created gulp file to write our configuration for gulp

// Initalise modules 
const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')
const postcss = require('autoprefixer')
const cssnano = require('cssnano') 
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const autoprefixer = require('autoprefixer') 
const browsersync = require('browser-sync').create()

// Use dart sass for @use, @forward etc
sass.compiler = require('dart-sass')

// Sass Task
function scssTask() {
  return src('app/scss/style.css', { sourcemaps: true })
  .pipe(sass())
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(dest('dist', { sourcemaps: '.' }))
}

// JavaScript Task
function jsTask() {
    return src('app/js/script.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-ev']}))
    .pipe(terser())
    .pipe('dist', { sourcemaps: '.' })
}

// Browsersync

function browserSyncServer(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    }, 
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      },
    },
  })
  cb()
}

function browserSyncReload(cb) {
  browsersync.reload()
  cb()
}

// Watch Task
function watchTask() {
  watch('*.html', browserSyncReload)
  watch(
    ['app/scss/**/*.scss', 'app/**/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  )
}

// Default Gulp Task
exports.default = series (scssTask, jsTask, browserSyncSync, watchTask)