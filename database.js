const pgp = require('pg-promise')();
var db = pgp('postgres://futdeidgmwkfof:b0ff7cbc4d68c00baed469b499d82f550bca4995f018702c1c0f7abd185c8d17@ec2-54-83-27-165.compute-1.amazonaws.com:5432/d4j894b34cct4e?ssl=true');
// Add queries here
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//เข้าตาม id
function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(200)
                .json({
                    status: 'failed',
                    message: 'Retrieved products id:' + req.params.id
                });
        })
}
//insert
function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//update
function updateProduct(req, res) {
    var title = req.body.title;
    db.none(`update products set title='${title}'where id=` + req.params.id)
    // db.none('insert into products(id, title, price, created_at, tags)' +
    //     'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
    //     req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    var title = req.body.title;
    db.none(`DELETE FROM products WHERE id =` + req.params.id)
    // db.none('insert into products(id, title, price, created_at, tags)' +
    //     'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
    //     req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'delete success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//บอกว่า function ไหนบ้างที่ไม่ใช้หน้านี้เรียกใช้ได้เลย
//public
module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct
};