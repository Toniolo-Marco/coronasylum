const { default: DayData } = require("../models/daydata.model");

const findMostRecentByCountry = (Country) => DayData.findOne({Country},{},{ sort: { Date: -1 } }).exec();

const updateMany = (data) => {
    const ops = data.map(item => {
        return {
            updateOne: {
                filter: {
                    Country: item.Country,
                    Date: item.Date,
                },
                update: {
                    ...item
                },
                upsert: true,
            }
        }
    })
    return DayData.bulkWrite(ops)
}

module.exports = {findMostRecentByCountry,updateMany};