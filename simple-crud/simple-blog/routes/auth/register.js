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
    res.render('users/register', {
        email: '',
    });
});

router.post('/', sessionChecker, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;

    if (password != confirmPassword) {
        req.flash('error', "Please enter the correct password confirmation");
        res.render('users/register', {
            email: email,
        });
    }
    if (email && password) {
        // check if user exists
        dbConn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                req.flash('error', "Email : " + email + " is already registered");
                res.render('users/register', {
                    email: email,
                    address: address,
                });
            } else {
                res.send('Incorrect email and/or Password!');
            }
            res.end();
        });
        // insert query
        dbConn.query('INSERT INTO users SET ?', form_data, function (err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)

                // render to add.ejs
                res.render('users/register', {
                    email: email,
                    password: password,
                });
            } else {
                res.redirect('/posts');
            }
        })
    } else {
        res.send('Please enter email and Password!');
        res.end();
    }
});

module.exports = router;