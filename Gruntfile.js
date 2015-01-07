/**
 * + Gruntfile
 * =====================================================================
 */
'use strict'; // ECMAScript 5 strict mode

// add ngrok as requirement for local google pagespeedtesting. More about ngrok ngrok.com
var ngrok = require('ngrok');

module.exports = function(grunt) {
  grunt.util.linefeed = '\n'; // Force use of Unix newlines


  /**
    * + Global Project Vars
    * Usage: <%= globalConfig.var %>
    * =====================================================================
    */
  var globalConfig       = {};
  globalConfig.root      = '.';
  globalConfig.htdocs    = globalConfig.root   + '/app';
  globalConfig.report    = globalConfig.root   + '/report';
  globalConfig.bower     = globalConfig.root   + '/bower_components';
  globalConfig.temp      = globalConfig.htdocs + '/assets-temp';
  globalConfig.assetsDev = globalConfig.htdocs + '/assets-dev';
  globalConfig.assets    = globalConfig.htdocs + '/assets';
  /* = Global Project Vars */


  /**
   * + measure grunt task runtimes
   * https://github.com/sindresorhus/time-grunt
   * =====================================================================
   */
  require('time-grunt')(grunt);
  /* = measure grunt task runtimes  */


  /**
   * + task and config autoloading
   * https://github.com/firstandthird/load-grunt-config
   * https://github.com/shootaroo/jit-grunt
   * =====================================================================
   */
  require('load-grunt-config')(grunt, {
    // load grunt tasks only if necessary
    //jitGrunt: true,
    jitGrunt: {
      // here you can pass options to jit-grunt (or just jitGrunt: true)
      jitGrunt: true,
      /*staticMappings: {
        // specify static mappings, for qunit
        qunit: 'grunt-qunit-istanbul'
      }*/
    },
    // if not using jit-grunt, auto-load according to devDependencies
    /*
    loadGruntTasks: {
        pattern: 'grunt-*',
        config: require('./package.json'),
        scope: 'devDependencies'
    },
    */
    // data passed into <%= foo %>
    data: {
      pkg          : grunt.file.readJSON('package.json'),
      globalConfig : globalConfig
    }
  });
  /* = auto-load grunt task configs */

  // Register customer task for ngrok @require grunt-pagespeed
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 3000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

};
/* = Gruntfile */
