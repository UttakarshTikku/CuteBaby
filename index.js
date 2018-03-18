const puppeteer = require('puppeteer');
var gen = require('random-number').generator({ min:  10, max:  90, integer: true });
(async () => {
 const browser = await puppeteer.launch({
 headless: true,
 executablePath: process.argv[2] || "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
});
 const page = await browser.newPage();
 while(true){
   await page.goto('http://mycutebaby.in/contest/participant/?n=5aa6419c2f1be&utm_source=wsapp_share&utm_campaign=March_2018&utm_medium=shared&utm_term=wsapp_shared_5aa6419c2f1be&utm_content=participant',
    { waitUntil: 'networkidle2', timeout: 120000 });
   await page.waitForSelector('#vote_btn');
   await page.addScriptTag({path: './clicker.js'})
   var magicNumber = gen();
   for(var i = 0; i < (180 + magicNumber); i++) await timeout(10001);
 }
})();

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
