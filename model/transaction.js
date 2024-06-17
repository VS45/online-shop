const db = require("../data/config");
const Transaction = {
  create: (transaction, callback) => {
    return db.query("INSERT INTO transactions SET ?", transaction, callback);
  },
  getAll: (callback) => {
    return db.query("SELECT * FROM transactions", callback);
  },
};

module.exports = Transaction;
