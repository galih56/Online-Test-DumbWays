var express = require('express');
var router = express.Router();
var dbConn = require('../config/db');

router.get('/', function (req, res, next) {
    res.render('users/login', {
        email: '',
    })
})

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    let errors = false;

    if (email.length === 0 || password.length === 0) {
        errors = true;
        req.flash('error', "Please enter email and password");
        res.render('users/login', {
            email: email,
        });
    }

    if (password != confirmPassword) {
        errors = true;
        req.flash('error', "Please enter the correct password confirmation");
        res.render('posts/add', {
            email: email,
        });
    }

    if (errors == true || email && password) {
        // check if user exists
        dbConn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                res.redirect('/posts');
            } else {
                res.send('Incorrect email and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter email and Password!');
        res.end();
    }
});

module.exports = router;
