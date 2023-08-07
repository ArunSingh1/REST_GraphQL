const axios = require('axios');

const binance_url = 'https://api2.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","XRPUSDT","AVAXUSDT","UNIUSDT","THETAUSDT"]'

const restapi_get = () => {
    axios.get(binance_url).then((response)=>{
        console.log(response.data)
    })    
}

restapi_get()

// axios.get(binance_url)
//   .then((response) => {
//     // Handle the API response data here
//     console.log('Response data:', response.data);
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
//   });