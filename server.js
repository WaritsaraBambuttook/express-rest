var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./database.js');

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
//add routing
// index page
app.get('/', function (req, res) {
res.send('Express is running');
});
var output = {
    state : "success",
    message: 'REST api is working'
}
app.get('/api/json',function(req,res){
    res.json(output);
});
// products
//ดึง function มาจาก database.js เลย
app.get('/api/order', db.getAllorderID);
app.get('/api/count', db.getCount);

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});