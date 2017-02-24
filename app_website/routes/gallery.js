var express = require('express');
var router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
    res.render('gallery', { title: 'Gallery'});

});



/* POST to Add User Service */
router.post('/', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var lastName = req.body.lastName;
    var firstName = req.body.firstName;
    var MI = req.body.MI;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    var homePhone = req.body.homePhone;
    var cellPhone = req.body.cellPhone;
    var workPhone = req.body.workPhone;
    var email = req.body.email;
    var location= req.body.location;
    var age = req.body.age;
    var submit = req.body.submit;



    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({

        "lastName" : lastName,
        "firstName" : firstName,
        "MI" : MI,
        "address": address,
        "city" : city,
        "state" : state,
        "zip" : zip,
        "homePhone" : homePhone,
        "cellPhone" : cellPhone,
        "workPhone" : workPhone,
        "email" : email,
        "location" : location,
        "age" : age

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("gallery");
        }
    });
});


module.exports = router;