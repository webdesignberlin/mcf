/**
 * config for webdriverio with jasmine integration
 */

var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

var client = {};
jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

beforeEach(function() {
    client = webdriverio.remote(options);
    client.init();
});

afterEach(function(done) {
    client.end(done);
    /*
    setTimeout(function() {
        client.end(done);
    }, 10);
    */
});

describe('my webdriverio tests', function() {

    it('test it', function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                expect(err).toBeFalsy();
                expect(result.height).toBe(26 );
                expect(result.width).toBe(89);
            })
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('GitHub · Build software better, together.');
            })
            /*
            .getCssProperty('a[href="/plans"]', 'color', function(err, color){
                expect(err).toBeFalsy();
                expect(color).toBe('rgba(65,131,196,1)');
            })
            */
            .call(done);
    });

});