const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burger', function(req,res){
      burger.create(req.body.type, function(result){
        res.json({ id: result.insertId });
      })
  });

  router.put('/api/burger/:id', function(req, res){
      const condition = {id: req.params.id}

        let devour;
        if (req.body.devoured === 'true'){
            devour = true;
        } else {devour = false;}

      burger.update({devoured: devour}, condition, function(result){
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
      })
  })

  module.exports = router;
