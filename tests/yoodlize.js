module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com')
    },
    after: browser => {
        browser.end()
    },
    'Testing the see all': browser => {
        browser
            .useXpath()
            .click('(//*/div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Recreational Vehicles')
            .back()
    }
}
