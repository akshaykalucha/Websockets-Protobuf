const Express = require('express')
// const app = Express()
const fs = require("fs");
const Https = require('https')
const cors = require('cors')


var app = Express();

app.use(cors()); 

// app.get('/', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

const corsOptions = {
    origin: 'https://www.google.com'
  }


app.options('/', cors(corsOptions))

app.get('/', cors(corsOptions), (req, res) => {
    // First read existing users.
    res.header("Access-Control-Allow-Origin", "****");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    console.log(req)
    res.cookie('cookieName', 'cookieValue')
    res.send("hihihhihi")
 })


var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})