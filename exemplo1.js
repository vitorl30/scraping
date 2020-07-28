const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://multstore-mecanico-store.lojaintegrada.com.br/iu7oz012n-jogo-de-chaves-biela-12-pecas-tipo-l');
  await page.screenshot({path: 'exemplo1.png'});
await browser.close();
})();