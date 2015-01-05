/**
 * + Task Config: SassDoc
 * https://github.com/SassDoc/grunt-sassdoc
 * =====================================================================
 *
 * @Description Documentation of Sass Files
 */

module.exports = {

  'default': {
    'src': '<%= globalConfig.assetsDev %>/styles',
    'dest': '<%= globalConfig.root %>/docs'
  }

};
/* = Task Config: SassDoc */
