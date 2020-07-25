const debug = require('debug')('app:jsdom');
const axois = require('axios');

const { JSDOM } = require('jsdom');



async function main() {
  //collecting dom data
  debug('collecting data');
  const res = await axois('http://bikroy.com');
  const data = await res.data;
  
  debug('creating dom')
  const dom = new JSDOM(data);
  const { document } = dom.window;

  debug('getting dom data')
  debug(document.querySelector('p').innerHTML)
}
main()