const axios = require('axios');

function callAPI(o){
    let str="https://api.covid19api.com";
    //"https://api.covid19api.com/dayone/country/italy/status/confirmed
    //https://api.covid19api.com/world
    
    if(o.country!=="world"){
        str = `${str}/total/country/${o.country}`;
    }
    else{
        str = `${str}/world`;
    }
    return str;
}

exports.getData = async(query)=>{
    console.log(callAPI(query));
    const response = await axios.get(callAPI(query)).then((res)=>{
        return res.data;
    });
    return response;
}