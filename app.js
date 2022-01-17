const axios = require('axios');

const express = require('express');
// const res = require('express/lib/response');



async function get(){
    try{
        const siteUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=6051a82566fc1b42617d6dc6'
        const response = await axios({
            method:"GET",
            url:siteUrl,
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD',
                //'id': '6051a81966fc1b42617d6db6'
            },
            headers: {
                'X-CMC_PRO_API_KEY': '888e521d-9fa5-4b64-843d-011201fb0685'
            },
            json: true,
            gzip: true
        })
        console.log(response.data.data)
        return response.data.data;

    }catch (err){
        console.error(err.message)
        return err.message;
    }
}

get();
