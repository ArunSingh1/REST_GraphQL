var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
const axios = require('axios')

const inputtypeDefs = `
  type Ticker {
    symbol: String
    priceChange: String
    lastPrice: String
    volume: String
    highPrice: String

  }

  type Query {
    getCrytoData: [Ticker]
  }
`;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(inputtypeDefs)


// Binance api url 
const binance_url ='https://api2.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","XRPUSDT","AVAXUSDT","UNIUSDT","THETAUSDT"]'


// Root Query
// The root provides a resolver function for each API endpoint
var root = {
  getCrytoData: async () => {
    const response = await axios.get(binance_url);
    const tickerData = response.data.map((ticker) => ({
      symbol: ticker.symbol,
      priceChange: ticker.priceChange,
      lastPrice: ticker.lastPrice,
      volume: ticker.volume,
      highPrice: ticker.highPrice 
    }));
    return tickerData;
  }
  
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, 
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")