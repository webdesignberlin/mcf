/**
 * + Task Config: Copy
 * https://github.com/gruntjs/grunt-contrib-copy
 * =====================================================================
 *
 * @Description config global copy tasks
 */
module.exports = {

  // local jquery alternative
  jquery: {
    expand: true,
    src:    '<%= globalConfig.bower %>/jquery/dist/*',
    dest:   '<%= globalConfig.assets %>/js/vendor/jquery/',
    flatten: true
  }

  /* bootstrap basics
  bootstrap: {
    expand:  true,
    cwd:     '<%= globalConfig.bower %>/bootstrap-sass-official/assets/stylesheets/bootstrap/',
    src:     [
                'mixins/_clearfix.scss',
                'mixins/_grid-framework.scss',
                'mixins/_grid.scss',
                '_grid.scss'
             ],
    dest:    '<%= globalConfig.assetsDev %>/styles/vendor/bootstrap/',
    flatten: false
  }
  */
};
/* = Task Config: Copy dependency files */
