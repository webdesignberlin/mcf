/**
 * + Task Config: grunt-qunit-istanbul
 * https://github.com/asciidisco/grunt-qunit-istanbul
 * =====================================================================
 */
module.exports = {

  // overall options
  options: {
    '--web-security': 'no'
  },
  dev: {
    src: ['test/*.html']
  },
  ci: {
    src: ['<%= qunit.dev.src %>'],
    options: {
      coverage: {
        src: ['<%= globalConfig.assetsDev %>/js/*.js'],
        instrumentedFiles: 'tmp/instrumented',
        coberturaReport: 'report/cobertura'
      }
    }
  }

};
/* = Task Config: grunt-qunit-istanbul */
