/**
 * + Task Config: Autoprefixer
 * https://github.com/nDmitry/grunt-autoprefixer
 * =====================================================================
 *
 * @Description config the Autoprefixer
 */
module.exports = {

    // overall options
    options: {
        // Define browser specification according to your project
        // https://github.com/postcss/autoprefixer#browsers
        browsers: [
            'last 2 versions',
            '> 3%',
            'Opera 12.1',
            'Firefox ESR'
        ],
        map: true
    },

    // main styles
    main: {
        src:  '<%= globalConfig.assets %>/styles/main.css',
        dest: '<%= globalConfig.assets %>/styles/main.css'
    }
};
/* = Task Config: Autoprefixer */
