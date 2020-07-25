const debug = require('debug')('app:puppeteer');
const puppeteer = require('puppeteer');
// headless
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.myntra.com/');
  await page.screenshot({ path: 'data/headless.png' });

  await browser.close();
})();

// headfull
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.myntra.com/');
  await page.screenshot({ path: 'data/headful.png' });

  await browser.close();
})();