const express = require('express')
const app = express();


const bodyParser = require("body-parser");
const router = require('./router');

app.use(require("morgan")("dev"));
  app.use(require("cors")());
  app.use(require("helmet")());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use("/dummy/api/*", router);
  app.use('/dummy',(req, res) => {
    res.send({ error: false, message: "DUMMY SERVER IS LIVE!", result: null })
  })

  app.get("*", (req, res) =>
    res
      .status(404)
      .send({ error: true, message: "Route not Found!", result: null })
  );

app.listen(3005, async () => {
  console.log(`SERVER STARTED ON PORT: 3005`);
});
