const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const path = require('path');


const app = express();


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);


// Start the server
const port = 4000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});