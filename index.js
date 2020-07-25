/* // setup dot env env
require('dotenv').config();

const debug = require('debug')('app:api key');

// read API_KEY from dot env
debug(process.env.API_KEY);
 */

const debug = require('debug')('app:axios');
const axois = require('axios');
const cheerio = require('cheerio');

async function main() {
  const res = await axois('http://bikroy.com');
  const data = await res.data;
  const $ = cheerio.load(data); 
  debug($('h1').text())
}
main()