const puppeteer = require('puppeteer');

async function scapperProduct(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="ciHomeContentlhs"]/div[3]/div');  
  const txt = await el.getProperty('innerText');
  const rawTxt = await txt.jsonValue();

  console.log('rawTxt:', rawTxt);
}

scapperProduct('http://stats.espncricinfo.com/ci/content/records/223646.html');