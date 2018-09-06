var orm = require("../config/orm.js");

// Set up burger model
var burger = {

  // Return all burgers
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
};

module.exports = burger;