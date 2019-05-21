const connection = require('../config/connection.js');

const orm = {
    all: function(tableInput, cb) {
      connection.query('SELECT * FROM ??', tableInput, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      const queryString = 'INSERT INTO ?? (??) VALUES (?)'
  
      connection.query(queryString, [table, cols, vals], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    update: function(table, objColVals, condition, cb) {
      const queryString = 'UPDATE ?? SET ? WHERE ?'
  
      connection.query(queryString, [table, objColVals, condition], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

 module.exports = orm;