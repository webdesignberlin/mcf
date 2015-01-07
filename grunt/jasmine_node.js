/**
 * + Task Config: jasmine_note
 * https://github.com/jasmine-contrib/grunt-jasmine-node
 * =====================================================================
 */

module.exports = {

    options: {
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec'
    },
    all: ['test/web/']

};
