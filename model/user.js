const db = require('../data/config');
const User = {
  create: (user,callback) => {
    return db.query('INSERT INTO users SET ?', user,callback);
  }
};

module.exports = User;

