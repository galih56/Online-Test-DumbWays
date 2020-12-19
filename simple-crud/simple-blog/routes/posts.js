var express = require('express');
var router = express.Router();
var dbConn = require('../config/db');

// display posts page
router.get('/', function (req, res, next) {
    dbConn.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {

        if (err) {
            req.flash('error', err);
            // render to views/posts/index.ejs
            res.render('posts', { data: '' });
        } else {
            // render to views/posts/index.ejs
            res.render('posts', { data: rows });
        }
    });
});

// display add post page
router.get('/add', function (req, res, next) {
    // render to add.ejs
    console.log('get /add')
    res.render('posts/add', {
        title: '',
        content: ''
    })
})

// add a new post
router.post('/add', function (req, res, next) {

    let title = req.body.title;
    let content = req.body.content;
    let errors = false;

    if (title.length === 0 || content.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter title and content");
        // render to add.ejs with flash message
        res.render('posts/add', {
            title: title,
            content: content
        });
    }

    // if no error
    if (!errors) {

        var form_data = {
            title: title,
            content: content
        }

        // insert query
        dbConn.query('INSERT INTO posts SET ?', form_data, function (err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)

                // render to add.ejs
                res.render('posts/add', {
                    title: form_data.title,
                    content: form_data.content
                })
            } else {
                req.flash('success', 'post successfully added');
                res.redirect('/posts');
            }
        })
    }
})

// display edit post page
router.get('/edit/(:id)', function (req, res, next) {

    let id = req.params.id;

    dbConn.query('SELECT * FROM posts WHERE id = ' + id, function (err, rows, fields) {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'post not found with id = ' + id)
            res.redirect('/posts')
        }
        // if post found
        else {
            // render to edit.ejs
            res.render('posts/edit', {
                title_page: 'Edit post',
                id: rows[0].id,
                title: rows[0].title,
                content: rows[0].content
            })
        }
    })
})

// update post data
router.post('/update/:id', function (req, res, next) {

    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    let errors = false;

    if (title.length === 0 || content.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter title and content");
        // render to add.ejs with flash message
        res.render('posts/edit', {
            id: req.params.id,
            title: title,
            content: content
        })
    }

    // if no error
    if (!errors) {

        var form_data = {
            title: title,
            content: content
        }
        // update query
        dbConn.query('UPDATE posts SET ? WHERE id = ' + id, form_data, function (err, result) {
            //if(err) throw err
            if (err) {
                // set flash message
                req.flash('error', err)
                // render to edit.ejs
                res.render('posts/edit', {
                    id: req.params.id,
                    title: form_data.title,
                    content: form_data.content
                })
            } else {
                req.flash('success', 'post successfully updated');
                res.redirect('/posts');
            }
        })
    }
})

// display edit post page
router.get('/show/(:id)', function (req, res, next) {

    let id = req.params.id;

    dbConn.query('SELECT * FROM posts WHERE id = ' + id, function (err, rows, fields) {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'post not found with id = ' + id)
            res.redirect('/posts')
        }
        // if post found
        else {
            // render to edit.ejs
            res.render('posts/show', {
                title_page: 'Show post',
                id: rows[0].id,
                title: rows[0].title,
                content: rows[0].content
            })
        }
    })
})
// delete post
router.get('/delete/(:id)', function (req, res, next) {

    let id = req.params.id;

    dbConn.query('DELETE FROM posts WHERE id = ' + id, function (err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            // redirect to posts page
            res.redirect('/posts')
        } else {
            // set flash message
            req.flash('success', 'post successfully deleted! ID = ' + id)
            // redirect to posts page
            res.redirect('/posts')
        }
    })
})

module.exports = router;