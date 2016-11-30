const express = require('express');
const router = express.Router();
const Todo = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.find({}, function(error, todos) {
    res.render('index', { title: 'TodoApp', todos: todos });
  });
});

router.post('/create', function(req, res, next) {
  new Todo({
    title: req.body.title,
  }).save(function(error) {
    res.redirect( '/' );
  });
});

router.get('/todos/:id', function(req, res, next) {
  Todo.findById(req.params.id, function(error, todo){
    res.render('todo', { title: 'TodoApp', todo: todo });
  });
});

router.get('/todos/:id/edit', function(req, res, next) {
  Todo.findById(req.params.id, function(error, todo){
    res.render('edit', { title: 'TodoApp', todo: todo });
  });
});

router.post('/edit', function(req, res, next) {
  Todo.findById(req.body.id, function(error, todo){
    todo.title = req.body.title;
    todo.date = Date.now();
    todo.save(function(error) {
      res.redirect( '/' );
    });
  });
});

router.post('/delete', function(req, res, next) {
  Todo.findById(req.body.id, function(error, todo){
    todo.remove(function(error, todo){
      res.redirect( '/' );
    });
  });
});

module.exports = router;
