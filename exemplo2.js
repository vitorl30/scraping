const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const url = ''
  await page.goto(url)
  
  const result = await page.evaluate(() => {
    const imagem = document.querySelector(".tp-companyName").innerText;
    const titulo = document.querySelector(".phone").innerText;
    const preco = document.querySelector(".advAddress").innerText;

    const precoAjuste = preco.replace("R$", '').trim();

    return `"${titulo}", "${precoAjuste}", "${imagem}"`
  })
  
  browser.close()
  return result
};
scrape().then((value) => {
    console.log(value)
})