var connection = require('./connection.js');

var orm = {

  // Select All Method
  all: function(tableInput, cb){
    connection.query('SELECT * FROM ' +tableInput+ ';', function(err, result){
      if(err)throw err;
      cb(result);
    })
  },

  update: function(tableInput, condition, cb){
    connection.query('UPDATE' +tableInput+ 'SET devoured=true');
  }

}

module.exports = orm;