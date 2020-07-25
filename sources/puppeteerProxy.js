require('dotenv').config();
const debug = require('debug')('app:puppeteer');
const puppeteer = require('puppeteer');

const proxy = process.env.PROXY;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--proxy-server=${proxy}`]
  });
  const page = await browser.newPage();
  await page.goto('https://www.pandora.com/');
  await page.screenshot({ path: 'data/pandora.png' });

  await browser.close();
})();
