const puppeteer = require('puppeteer');
const async = require('async');



puppeteer.launch({headless: false}).then(async browser => {
    var page = await browser.newPage()
    page.setViewport({width: 1200, height: 600})
    await page.goto('https://segmentfault.com/news/frontend')
    await new Promise((cb) =>{
        setTimeout(cb(),1000)
    });

    var list = page.querySelectorAll('.news__list .news__item-title a');
    var SfFeArticleList = [];
    list.map(el => {
        SfFeArticleList.push({href: el.href.trim(), title: el.innerText})}) ;
    // var SfFeArticleList = await page.evaluate(() => {
    //     var list = page.querySelectorAll('.news__list .news__item-title a')
    //
    //     return list.map(el => {
    //         return {href: el.href.trim(), title: el.innerText}
    //     })
    // });

    console.log('SfFeArticleList:', SfFeArticleList);

    // await page.screenshot({path: './data/sf-juejin/sf.png', type: 'png'});



    // // Store the endpoint to be able to reconnect to Chromium
    // const browserWSEndpoint = browser.wsEndpoint();
    // // Disconnect puppeteer from Chromium
    // browser.disconnect();
    //
    // // Use the endpoint to reestablish a connection
    // const browser2 = await puppeteer.connect({browserWSEndpoint});
    // // Close Chromium
    // await browser2.close();
});
