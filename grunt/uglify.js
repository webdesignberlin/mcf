/**
 * + Task Config: Uglify
 * https://github.com/gruntjs/grunt-contrib-uglify
 * =====================================================================
 *
 * @Description minify Task for js files
 */
module.exports = {

    // overall options
    options: {
        sourceMap: true,
        preserveComments: false
    },

    // main scripts
    main: {
        files: [{
            src: [
                '<%= globalConfig.assetsDev %>/js/**/*.js',
            ],
            dest: '<%= globalConfig.assets %>/js/main.min.js'
        }]
    }

};
/* = Task Config: Uglify */
