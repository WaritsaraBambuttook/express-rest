const pgp = require('pg-promise')();
var db = pgp('postgres://bjwszttquehmfk:a4f6bf708305c1f87a2caeb218400b856a0424698ac79e83c2e81bcc4c105a3e@ec2-184-73-169-151.compute-1.amazonaws.com:5432/d3otr9sl321kff?ssl=true');
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

//purchase_items
function getpurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getpurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
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
function insertpurchase_items(req, res) {
    db.none('insert into purchase_items(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//update
function updatepurchase_items(req, res) {
    var title = req.body.title;
    db.none(`update purchase_items set title='${title}'where id=` + req.params.id)
    // db.none('insert into products(id, title, price, created_at, tags)' +
    //     'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
    //     req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletepurchase_items(req, res) {
    var title = req.body.title;
    db.none(`DELETE FROM purchase_items WHERE id =` + req.params.id)
    // db.none('insert into products(id, title, price, created_at, tags)' +
    //     'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
    //     req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'delete success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//Purchase
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchaseByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function insertPurchase(req, res) {
    db.any('insert into purchases(purchase_id,created_at,name,address,state,zipcode,user_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${user_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function updatePurchase(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function DeletePurchase(req, res) {
    db.any('delete from purchases where purchase_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//user
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getUserByID(req, res) {
    db.any('select * from users where user_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
function insertUser(req, res) {
    db.any('insert into users(user_id,email,password,details,created_at)' +
        'values(${user_id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function DeleteUser(req, res) {
    db.any('delete from users where user_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
  
}
function updateUser(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where user_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getpurchase_items,
    getpurchase_itemsByID,
    insertpurchase_items,
    updatepurchase_items,
    deletepurchase_items,
    getPurchase,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getUser,
    getUserByID,
    insertUser,
    DeleteUser,
    updateUser





};