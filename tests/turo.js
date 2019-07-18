var turoObject = {}

var search = [
    {
        city: 'Salt Lake City, Utah',
        car: '@vehicleTesla',
    },
    {
        city: 'St George, Utah',
        car: '@vehicleVW',
    },
]

module.exports = {
    beforeEach: browser => {
        turoObject = browser.page.turoObject()
        turoObject.navigate()
    },
    after: browser => {
        turoObject.end()
    },

    'Search Tesla SLC, VW St George': browser => {
            search.forEach(tesla=>{
                turoObject.searchTesla(tesla)
            })

    }

}