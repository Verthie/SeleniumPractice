const { By, Key, Builder } = require('selenium-webdriver');

require('chromedriver');

async function test_case() {
    let driver;

    try {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://duckduckgo.com');

        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.findElement(By.name('q')).sendKeys('Hello, World!', Key.RETURN);
    } catch (e) {
        console.log(e);
    } finally {
        setInterval(function () {
            driver.quit();
        }, 5000);
        // await driver.quit();
    }
}

test_case();
