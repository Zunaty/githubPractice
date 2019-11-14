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

            //These are testing the See All Buttons on the categories
            .click('(//*/div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Recreational Vehicles')
            .back()

            .click('(//*/div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Outdoor Gear')
            .back()

            .click('(//*/div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Electronics')
            .back()

            .click('(//*/div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Party & Wedding Equipment')
            .back()

            //These Test the button buttons
            .click('(//*/div[@class="f-1 f-cc"])[1]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Tools')
            .back()

            .click('(//*/div[@class="f-1 f-cc"])[2]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Outdoor Gear')
            .back()

            .click('(//*/div[@class="f-1 f-cc"])[3]')
            .waitForElementVisible('//input[@name="keyword"]')
            .assert.containsText('//*/div[@class="sc-jKVCRD jSqgxr"]','Electronics')
            .back()
    }
}
