const mix = require('laravel-mix')

class Astroturf {
  /**
   * The optional name to be used when called by Mix.
   * Defaults to the class name, lowercased.
   *
   * Ex: mix.example();
   *
   * @return {String|Array}
   */
  name() {
    return 'astroturf'
  }

  /**
   * All dependencies that should be installed by Mix.
   *
   * @return {Array}
   */
  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return ['astroturf', 'react', 'postcss-nested']
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param  {Object} webpackConfig
   * @return {void}
   */
  webpackConfig(webpackConfig) {
    webpackConfig = {
      module: {
        rules: [
          {
            test: /\module\.scss$/,
            use: [{
              loader: 'style-loader'
            }, {
              loader: 'astroturf/css-loader',
            }, {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }],
          },
          {
            test: /\.js?$/,
            use: [
              'babel-loader',
              {
                loader: 'astroturf/loader',
                options: { extension: '.module.scss' },
              },
            ],
          },
        ],
      }
    }
  }

  babelConfig() {
    return {
      plugins: ['astroturf/plugin']
    }
  }
}

mix.extend('astroturf', new Astroturf())
