const db = require('../data/config');
const User = {
  create: (user,callback) => {
    return db.query('INSERT INTO users SET ?', user,callback);
  },
  getAll: (callback) => {
    return db.query('SELECT * FROM users',callback);
  },
  getById: (id,callback) => {
    return db.query('SELECT * FROM users WHERE id = ?', [id],callback);
  },
  update: (id, user,callback) => {
    return db.query('UPDATE users SET ? WHERE id = ?', [user, id],callback);
  },
  delete: (id,callback) => {
    return db.query('DELETE FROM users WHERE id = ?', [id],callback);
  }
};

module.exports = User;



