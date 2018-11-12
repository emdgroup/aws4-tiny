const webdriver = require('selenium-webdriver');

const { BROWSERSTACK_USER, BROWSERSTACK_KEY } = process.env;

// Input capabilities
const capabilities = {
  resolution: '1024x768',
  'browserstack.video': 'false',
  'browserstack.selenium_version': '3.14.0',
  'browserstack.ie.driver': '3.8.0',
  'browserstack.user': BROWSERSTACK_USER,
  'browserstack.key': BROWSERSTACK_KEY,
};

const browsers = [
  {
    browserName: 'IE',
    browser_version: '10.0',
    os: 'Windows',
    os_version: '7',
  },
  {
    browserName: 'IE',
    browser_version: '11.0',
    os: 'Windows',
    os_version: '7',
  },
  {
    browserName: 'Edge',
    browser_version: '17.0',
    os: 'Windows',
    os_version: '10',
  },
  {
    browserName: 'Edge',
    browser_version: '15.0',
    os: 'Windows',
    os_version: '10',
  },
  {
    browserName: 'Chrome',
    browser_version: '70.0',
    os: 'Windows',
    os_version: '10',
  },
  {
    browserName: 'Chrome',
    browser_version: '49.0',
    os: 'Windows',
    os_version: '7',
  },
  {
    browserName: 'Firefox',
    browser_version: '63.0',
    os: 'Windows',
    os_version: '10',
  },
  {
    browserName: 'Firefox',
    browser_version: '47.0',
    os: 'Windows',
    os_version: '7',
    'browserstack.selenium_version': '3.2.0',
    'browserstack.console': 'errors',
  },
];

const testSuite = require('./aws-sig-v4-test-suite.json');

browsers.forEach((browser) => {
  const { browserName, browser_version } = browser;
  describe(`browser test for ${browserName} ${browser_version}`, () => {
    let driver;
    beforeAll(() => {
      driver = new webdriver.Builder()
        .usingServer('http://hub-cloud.browserstack.com/wd/hub')
        .withCapabilities(Object.assign({}, capabilities, browser))
        .build();
    });

    afterAll(() => driver.quit(), 5000);

    let page;

    test('load site and get title', async () => {
      page = await driver.get('https://emdgroup.github.io/aws4-tiny/');
      return expect(driver.getTitle()).resolves.toMatch('aws4-tiny');
    }, 15000);

    test('run tests in browser', async () => {
      // wrappedJSObject required for Selenium + Firefox 47
      const results = await driver.executeScript(cb => ('wrappedJSObject' in window ? wrappedJSObject.results : results));

      expect(results).toHaveLength(testSuite.length);
      return results.forEach(t => expect(t.success).toBeTruthy());
    });
  });
});
