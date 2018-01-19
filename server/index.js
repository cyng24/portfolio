'use strict'

const express = require('express')
const app = express();

const bodyParser = require('body-parser')
const {resolve} = require('path')

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(require('volleyball'))
}  

//The code below works because `.use` returns `this` which is `app`. So what we want to return in the `module.exports` is `app`, and we can chain on that declaration because each method invokation returns `app` after mutating based on the middleware functions
module.exports = app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.

  // notice the use of `_` as the first parameter above. This is a pattern for parameters that must exist, but you don't use or reference (or need) in the function body that follows.

if (module === require.main) {
  // Start listening only if we're the main module.

  const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
  app.listen(port, function () {
    console.log(`Your server is listening on port ${port}`);
  });

/*   const PORT = 2424
  const db = require('../db')
  db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
  }); */
}
