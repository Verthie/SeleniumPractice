const { By, Builder } = require('selenium-webdriver');
require('chromedriver');
// const fs = require("fs");

async function scrape() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.youtube.com/@steamcode4441');

        // bypassing cookie monit
        await driver.findElement(By.className('VfPpkd-vQzf8d')).click();

        // can't bypass login monit or log into my account :/

        // get and display all of the links in the page
        let links = await driver.findElements(By.css('a'));

        for (let link of links) {
            console.log(await link.getText());
        }

        // display a specific line in the page
        let line = await driver.findElement(By.partialLinkText('Lofi'));
        console.log(await line.getText());
    } catch (e) {
        console.log(e);
    } finally {
        // await driver.quit();
    }
}

scrape();
