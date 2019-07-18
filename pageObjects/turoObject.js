var searchCar = {
    searchTesla: function (array) {

        this
            .waitForElementPresent('@whereHome', 10000)
            .setValue('@whereHome', array.city)
            .waitForElementPresent('@startDateHome')
            .click('@startDateHome')
            .waitForElementPresent('@nextMonth', 2000)
            .click('@nextMonth')
            .click('@day1')
            .click('@startTime')
            .api.keys(this.api.Keys.ARROW_UP)
            .keys(this.api.Keys.ARROW_UP)
            .keys(this.api.Keys.ENTER)
        this
            .pause(1000)
        this
            .click('@endDateHome')
            .click('@nextMonth2')
            .waitForElementVisible('@day2')
            .click('@day2')
            .click('@endTime')
            .api.keys(this.api.Keys.ARROW_DOWN)
            .keys(this.api.Keys.ARROW_DOWN)
            .keys(this.api.Keys.ARROW_DOWN)
            .keys(this.api.Keys.ARROW_DOWN)
            .keys(this.api.Keys.ENTER)
        this
            .click('@searchBtn')
            .waitForElementPresent('@carResult')
            .verify.visible('@carResult')
            .click('@filters')
            .moveToElement('@seats', 30, 30)
            .click('@make')
            .pause(3000)
            .click(array.car)
            .click('@viewResultsBtn')
            .waitForElementVisible('@carResult')
            .verify.visible('@carResult')
            .pause(2000)
        this
            .click('@carResult')
            .api.windowHandles(tabs => {
                this.switchWindow(tabs.value[1])
            })
        this
            .waitForElementVisible('@checkoutBtn', 10000)
            .click('@checkoutBtn')
            .click('@loginCheckout')
            .assert.elementPresent('@loginWelcome')
            .closeWindow()
            //tab to home page
            .api.windowHandles(results => {
                this.switchWindow(results.value[0])
            })
        this
            .click('@homeBtn')
            .verify.visible('@theHomePage', 'finished')
        return this

    }

}

module.exports = {

    url: 'https://turo.com/',
    commands: [searchCar],
    elements: {
        theHomePage: {
            selector: '//*[contains(text(),"Way better than")]',
            locateStrategy: 'xpath'
        },
        homePageLogo: '.header-logo',
        homeBtn: '.navbarLogo-link',
        whereHome: '#js-searchFormExpandedLocationInput',
        where: '#location',
        searchBtn: {
            selector: '(//*[@type="submit"])[3]',
            locateStrategy: 'xpath'
        },
        endTime: '[name="endTime"]',
        startTime: '[name="startTime"]',
        startDateHome: '[name="startDate"]',
        endDateHome: '[name="endDate"]',
        nextMonth: {
            selector: '(//*[@class="calendar-arrow calendar-arrow--right"])[1]',
            locateStrategy: 'xpath'
        },
        nextMonth2: {
            selector: '(//*[@class="calendar-arrow calendar-arrow--right"])[2]',
            locateStrategy: 'xpath'
        },
        lastMonth: '.calendar-arrow calendar-arrow--left',
        day1: {
            selector: '//*[text()="1"]',
            locateStrategy: 'xpath'
        },
        day2: {
            selector: '(//*[text()="2"])[2]',
            locateStrategy: 'xpath'
        },
        carResult: {
            selector: '//*[@class="searchResult"]',
            locateStrategy: 'xpath'
        },
        filters: {
            selector: '//*[text()="Filters"]',
            locateStrategy: 'xpath'
        },
        make: {
            selector: '//*[@name="makes"]',
            locateStrategy: 'xpath'
        },
        vehicleTesla: {
            selector: '//*[text()="Tesla"]',
            locateStrategy: 'xpath'
        },
        vehicleVW: {
            selector: '//*[text()="Volkswagen"]',
            locateStrategy: 'xpath'
        },
        viewResultsBtn: {
            selector: '(//*[contains(text(),"results")])[2]',
            locateStrategy: 'xpath'
        },
        seats: {
            selector: '//*[@name="minimumSeatCount"]',
            locateStrategy: 'xpath'
        },
        checkoutBtn: {
            selector: '//*[text()="Go to checkout"]',
            locateStrategy: 'xpath'
        },
        loginCheckout: {
            selector: '(//*[text()="Log in"])[2]',
            locateStrategy: 'xpath'
        },
        loginWelcome: {
            selector: '(//*[contains(text(),"Welcome")])[1]',
            locateStrategy: 'xpath'
        },


    },



}