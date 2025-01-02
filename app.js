const express = require('express');
const app = express();
const serverless = require('serverless-http');
const homeRoute = require('./routes/home');
const indexRoute = require('./routes/index');

app.use(express.json());
app.use('/home', homeRoute);
app.use('/', indexRoute);


  // You don't need to listen to the port when using serverless functions in production
  if (process.env.NODE_ENV === "dev") {
    app.listen(8080, () => {
      console.log(
        "Server is running on port 8080. Check the app on http://localhost:8080"
      );
    });
  }
module.exports = serverless(app);
