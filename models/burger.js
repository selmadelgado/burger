var orm = require("../config/orm.js");

// Set up burger model
var burger = {

  // Return all burgers
  all: function(cb) {
    orm.all('burgers', function(res){
      cb(res);
    })
  },

  // Devour a burger - this code is broken
  update: function(id, cb){
    orm.update('burgers', id, cb);
  },

  // Create burger
  create: function(name, cb){
    orm.create('burgers', name, cb)
  }
}

module.exports = burger;