var connection = require('./connection.js');

var orm = {

  // Select All Method
  all: function(tableInput, cb){
    connection.query('SELECT * FROM ' +tableInput+ ';', function(err, result){
      if(err)throw err;
      cb(result);
    })
  },

  // Update Method -- THIS CODE IS BROKEN - 16:08 in video
  update: function(tableInput, condition, cb){
    connection.query('UPDATE ' + tableInput + 'SET devoured=true WHERE id=' + condition + ';', function(err, result){
      if(err)throw err;
      cb(result);
    })
  },

  // Create Method - - THIS CODE IS ALSO BROKEN - I think its fixed
  create: function(tableInput, val, cb){
    connection.query('INSERT INTO ' + tableInput + '(burger_name)) VALUES ("' + val + '");', function(err, result){
      if(err)throw err;
      cb(result);
    })
  }
}

module.exports = orm;