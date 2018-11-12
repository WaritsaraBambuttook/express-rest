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
app.get('/api/products/', db.getAllProducts);
//get id
app.get('/api/products/:id' , db.getProductByID);
//insert
app.post('/api/products', db.insertProduct);
//update
app.put('/api/products/:id' , db.updateProduct);
//delete
app.delete('/api/products/:id' , db.deleteProduct);

//purchase_items
app.get('/api/purchase_items', db.getpurchase_items);
//get id
app.get('/api/purchase_items/:id' , db.getpurchase_itemsByID);
//insert
app.post('/api/purchase_items', db.insertpurchase_items);
//update
app.put('/api/purchase_items/:id' , db.updatepurchase_items);
//delete
app.delete('/api/purchase_items/:id' , db.deletepurchase_items);

//purchase
app.get('/api/purchase', db.getPurchase);
//get id
app.get('/api/purchase/:id', db.getPurchaseByID);
//insert
app.post('/api/purchase', db.insertPurchase);
//update
app.put('/api/purchase/:id', db.updatePurchase);
//delete
app.delete('/api/purchase/:id', db.DeletePurchase);

//user
app.get('/api/user', db.getUser);
//get id
app.get('/api/user/:id', db.getUserByID);
//insert
app.post('/api/user', db.insertUser);
//update
app.put('/api/user/:id', db.updateUser);
//delete
app.delete('/api/user/:id', db.DeleteUser);

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});