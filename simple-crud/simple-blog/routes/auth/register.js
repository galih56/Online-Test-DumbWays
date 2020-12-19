var express = require('express');
var router = express.Router();
var dbConn = require('../config/db');

router.get('/', function (req, res, next) {
    res.render('users/register', {
        email: '',
    });
});

router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email && password) {
        // check if user exists

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