/**
 * + Task Config: Pagespeed
 * https://github.com/jrcryer/grunt-pagespeed
 * =====================================================================
 *
 * Run mobile and desktop performance tests for your deployed site using Google PageSpeed Insights,
 * uses psi and gpagespeed.
 */

module.exports = {

  // overall options
  /*options: {
    nokey: true,
    url: "https://developers.google.com"
  },
  prod: {
    options: {
      url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
      locale: "en_GB",
      strategy: "desktop",
      threshold: 80
    }
  },
  paths: {
    options: {
      paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
      locale: "en_GB",
      strategy: "desktop",
      threshold: 80
    }
  }*/
  options: {
    nokey: true,
    locale: "de_DE",
    threshold: 40
  },
  local: {
    options: {
      strategy: "desktop"
    }
  },
  mobile: {
    options: {
      strategy: "mobile"
    }
  }

};
/* = Task Config: Pagespeed */
