var express = require('express');
var router = express.Router();
var dbConn = require('../../config/db');

// route for user logout
router.get('/', (req, res) => {
    if (req.session.user) {
        req.session.destroy();
        res.redirect('/');
    }
    res.redirect('/');
});

module.exports = router;