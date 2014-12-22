/**
 * + Task Config: Modernizr
 * https://github.com/Modernizr/grunt-modernizr
 * =====================================================================
 *
 * @Description grunt-modernizr is a Modernizr builder for your project. It is based on the Modernizr (https://github.com/Modernizr/modernizr.com/blob/gh-pages/i/js/modulizr.js) team's Modulizr tool.
 */
module.exports = {
    main: {
        devFile:             '<%= globalConfig.bower %>/modernizr/modernizr.js',
        outputFile:          '<%= globalConfig.assetsDev %>/js/vendor/modernizr/modernizr-custom.js',
        uglify:              false, // false, as other tasks will concatenate and uglify/minify
        parseFiles:          true,  // crawl your project for references to Modernizr tests.
        matchCommunityTests: true,  // When parseFiles = true, matchCommunityTests = true will attempt to match user-contributed tests.
        // Based on default settings @http://modernizr.com/download/
        extra: {
            shiv:         false,
            printshiv:    false,
            load:         false,
            mq:           false,
            cssclasses:   false
        },
        // Based on default settings @http://modernizr.com/download/
        extensibility:  {
            addtest:      false,
            prefixed:     false,
            teststyles:   false,
            testprops:    false,
            testallprops: false,
            hasevents:    false,
            prefixes:     false,
            domprefixes:  false
        },
        // Define any tests you want to implicitly include.
        tests: [
        ],
        // Have custom Modernizr tests? Add paths to their location here.
        customTests: [
        ],
        files: {
            src: [
                '<%= globalConfig.assets %>/styles/main.css',
                '<%= globalConfig.assets %>/js/main.js'
            ]
        },
        excludeFiles: [
        ]
    }
};
/* = Task Config: Modernizr */
