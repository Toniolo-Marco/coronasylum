const adjustISOtoAPI = (moment) => {
    return moment.toISOString(false).replace(/\.[0-9]{3}Z$/,"Z");
}

const getUTCstartOfDay = (moment) => {
    return moment(moment).utc().startOf("day");
}

exports.adjustISOtoAPI = adjustISOtoAPI;
exports.getUTCstartOfDay = getUTCstartOfDay;