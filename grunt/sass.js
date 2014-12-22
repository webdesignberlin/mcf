/**
 * + Task Config: SASS
 * https://www.npmjs.com/package/grunt-contrib-sass
 * =====================================================================
 *
 * Description compile Sass Files
 */
module.exports = {

    // overall options
    options : {
        precision: 10,
        sourceMap: true
    },

    // main styles
    main: {
        files: {
          '<%= globalConfig.assets %>/styles/main.css' : '<%= globalConfig.assetsDev %>/styles/main.scss' // 'destination': 'source'
        }
    }

};
/* = Task Config: SASS */
