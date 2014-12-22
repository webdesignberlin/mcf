/**
 * + Task Config: MQ Packer
 * https://github.com/hail2u/grunt-css-mqpacker
 * =====================================================================
 *
 * @Description Pack same media query rules into one media query rule using CSS MQPacker.
 */
module.exports = {

    // overall options
    options: {
        map:  true
    },

    // main styles
    main: {
        src:  '<%= globalConfig.assets %>/styles/main.css',
        dest: '<%= globalConfig.assets %>/styles/main.css'
    }

};
/* = Task Config: MQ Packer */
