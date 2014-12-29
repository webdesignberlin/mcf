/**
 * + Task Config: SASS
 * https://github.com/sindresorhus/grunt-sass
 * =====================================================================
 *
 * Description compile Sass Files
 * This task uses libsass which is an experimental Sass compiler in C++.
 * In contrast to the original Ruby compiler, this one is much faster, but is
 * missing some features, though improving quickly.
 * It also doesn't support Compass. Check out grunt-contrib-sass if you prefer
 * something more stable, but slower.
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
