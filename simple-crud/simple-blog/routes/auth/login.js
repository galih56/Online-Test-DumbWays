var express = require('express');
var router = express.Router();
var dbConn = require('../../config/db');

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        next();
    }
};

router.get('/', sessionChecker, function (req, res) {
    res.render('users/login', {
        email: '',
    })
})

router.post('/', sessionChecker, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    let errors = false;

    if (email.length === 0 || password.length === 0) {
        errors = true;
        req.flash('error', "Please enter email and password");
        res.render('users/login', {
            email: email,
        });
    }


    if (errors == true || email && password) {
        // check if user exists
        dbConn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                req.session.user = results[0];
                res.redirect('/posts');
            } else {
                req.flash('error', 'Incorrect email and/or Password!');
                res.redirect('/login');
            }
            res.end();
        });
    } else {
        res.send('Please enter email and Password!');
        res.end();
    }
});
// galihindra650@gmail.com
module.exports = router;
