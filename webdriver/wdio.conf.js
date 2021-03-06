exports.config = {
    port: '9515',
    path: '/',
    specs: [
        './index.js'
    ],

    capabilities: [{
        browserName: 'chrome'
    }],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,

    baseUrl: 'http://webdriver.io',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },

    services: [
        'chromedriver'
    ],
    chromeDriverLogs: './'
}