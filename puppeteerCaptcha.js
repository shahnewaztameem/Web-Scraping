// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra');
 
// add recaptcha plugin and provide it your 2captcha token (= their apiKey)
// 2captcha is the builtin solution provider but others would work as well.
// Please note: You need to add funds to your 2captcha account for this to work
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: process.env.CAPTCHA_API
    },
    visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
  })
);

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/recaptcha/api2/demo');
  await page.solveRecaptchas();

  await Promise.all([
    page.waitForNavigation(),
    page.click(`#recaptcha-demo-submit`)
  ])
  await page.screenshot({ path: 'data/captcha.png' });
  await browser.close();
})();