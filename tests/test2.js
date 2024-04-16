const { By, Key, Builder } = require('selenium-webdriver');

require('chromedriver');

async function test_case() {
    // create driver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // send driver to website
        await driver.get('https://github.com/');

        // grab an element from the page
        await driver.findElement(By.partialLinkText('Sign in')).click();

        await driver.manage().setTimeouts({ implicit: 5000 });

        await new Promise((resolve) => setTimeout(resolve, 5000));

        // display the title
        console.log(await driver.getTitle());

        // if the title isn't correct, end the test
        if ((await driver.getTitle()) === 'Sign in to GitHub · GitHub') {
            console.log('Test #1 success');
        } else {
            console.log('Test #1 failed');
            return;
        }

        // input a username and password
        await driver.findElement(By.name('login')).sendKeys('SteamCode');
        await driver.findElement(By.name('password')).sendKeys('**********', Key.RETURN);

        if (await driver.findElement(By.className('flash flash-full flash-error')).isDisplayed()) {
            console.log('Test #2 success');
        }
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}

test_case();
