var orm = require("../config/orm.js");

// Set up burger model
var burger = {

  // Return all burgers
  all: function(cb) {
    orm.all('burgers', function(res){
      cb(res);
    })
  },

  // Devour a burger
  update: function(id, cb){
    orm.update('burgers', id, cb);
  }
}

module.exports = burger;