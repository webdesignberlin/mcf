/**
 * + Task Config: Clean
 * https://github.com/gruntjs/grunt-contrib-clean
 * =====================================================================
 *
 * @Description config for clean temporary files
 */
module.exports = {

  // temporary files
  temp: [
      '<%= globalConfig.temp %>'
  ],

  report: [
      '<%= globalConfig.report %>'
  ],

  // auto-installed dependencies / vendor folders
  deps: [
    '<%= globalConfig.assets %>/js/vendor/**/*',
    '<%= globalConfig.assets %>/styles/vendor/**/*',
    '<%= globalConfig.assetsDev %>/js/vendor/**/*',
    '<%= globalConfig.assetsDev %>/styles/vendor/**/*'
  ]

};
/* = Task Config: Clean */
