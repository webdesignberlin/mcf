/**
 * + Task Config: Browser Sync
 * https://github.com/shakyshane/grunt-browser-sync
 * =====================================================================
 *
 * @Description config Browser Sync
 */
module.exports = {

    // overall options
    options: {
        // url to dev site
        proxy:          'mcf.dev',
        // or static file server
        /*
        server: {
            baseDir:    '<%= globalConfig.htdocs %>',
            directory:  true
        },
        */
        watchTask:      true,
        ghostMode: {
            clicks:     true,
            location:   true,
            forms:      true,
            scroll:     true
        }
    },

    // main assets
    main: {
        bsFiles: {
            src : [
                '<%= globalConfig.assets %>/styles/main.min.css',
                '<%= globalConfig.assets %>/js/main.min.js'
            ]
        }
    }
};
/* = Task Config: Browser Sync */
