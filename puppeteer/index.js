const puppeteer = require('puppeteer');

(async ()=> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // working
    await page.goto('https://www.allrecipes.com/');
    await page.screenshot({ path : 'allRecipes.png'});
    
    // finishing the work
    await browser.close();
    console.log("done");
}
)();