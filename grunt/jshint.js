/**
 * + Task Config: grunt-contrib-jshint
 * https://github.com/gruntjs/grunt-contrib-jshint
 * =====================================================================
 */
module.exports = {
  // overall options
  options: {
    jshintrc: '.jshintrc'
  },
  dev: {
    src: [
      'Gruntfile.js',
      '<%= globalConfig.assetsDev %>/js/**'
    ]
  },
  ci: {
    options: {
      force: true,
      reporter: 'checkstyle',
      reporterOutput: '<%= globalConfig.report %>/jshint_checkstyle.xml'
    },
    // add same src like in the dev Task
    src: ['<%= jshint.dev.src %>']
  }
};
/* = Task Config: grunt-contrib-jshint */
