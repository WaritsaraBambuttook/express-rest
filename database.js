const pgp = require('pg-promise')();
var db = pgp('postgres://bjwszttquehmfk:a4f6bf708305c1f87a2caeb218400b856a0424698ac79e83c2e81bcc4c105a3e@ec2-184-73-169-151.compute-1.amazonaws.com:5432/d3otr9sl321kff?ssl=true');
// Add queries here
function getAllorderID(req, res) {
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


module.exports = {
    getAllorderID





};