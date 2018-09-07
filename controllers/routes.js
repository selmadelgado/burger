var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
   burger.all(function(burger_data){
      console.log(burger_data);
        res.render('index', {burger_data});
    })
 })

 // this code is broken
 router.put('/burgers/update/:id', function(req, res){
   burger.update(req.body.burger_id, function(result){
     console.log(result);
     res.redirect('/');
   });
 });


  module.exports = router;