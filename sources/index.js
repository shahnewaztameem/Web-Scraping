/* // setup dot env env
require('dotenv').config();

const debug = require('debug')('app:api key');

// read API_KEY from dot env
debug(process.env.API_KEY);
 */

/* const debug = require('debug')('app:axios');
const axois = require('axios');
const cheerio = require('cheerio');

async function main() {
  const res = await axois('http://bikroy.com');
  const data = await res.data;
  const $ = cheerio.load(data); 
  debug($('h1').text())
}
main() */


// Puppteer - used for fatching dynamic web content (dynamic web content - content that loads dynamically i.e. from API)
const debug = require('debug')('app:puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  debug('opening browser')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  debug('opening browser')
  await page.goto('https://react-redux.realworld.io/#/?_k=xiy6dr');

  debug('waiting for article preview')
  await page.waitForSelector('.article-preview h1');

  debug('collecting data')
  const title = await page.title();
  const preview = await page.evaluate(() => document.querySelector('.article-preview h1').innerHTML);

  debug({ title, preview });

  await browser.close();
})();









