/**
 * + Task Config: grunt-contrib-csslint
 * https://github.com/gruntjs/grunt-contrib-csslint
 * @TODO check https://github.com/ahmednuaman/grunt-scss-lint
 * =====================================================================
 */
module.exports = {
  // overall options
  options: {
    csslintrc: '.csslintrc'
  },
  dev: {
    src: ['<%= globalConfig.assetsDev %>/styles/**/*.css']
  },
  ci: {
    options: {
      formatters: [
        {id: 'lint-xml', dest: '<%= globalConfig.report %>/csslint_lint.xml'}
      ]
    },
    src: ['<%= csslint.dev.src %>']
  }
};
/* = Task Config: grunt-contrib-csslint */
