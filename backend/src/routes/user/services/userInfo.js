import Database from '../../../database.js';

export const userInfo = (id) => {
  return new Promise((resolve, reject) => {
    Database.db.get('SELECT id, email, firstName, lastName FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        console.log("une erreur est survenue dans la requête userInfo", err)
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};
