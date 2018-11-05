var express = require('express');
var app = express();
var db = require('./database.js');


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
//ดึง function มาจาก database.js เลย
app.get('/api/products/', db.getAllProducts);
//get id
app.get('/api/products/:id' , db.getProductByID);
//insert
app.post('/api/products', db.insertProduct);
//update
app.put('/api/products/:id' , db.updateProduct);
//delete
app.delete('/api/products/:id' , db.deleteProduct);

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});