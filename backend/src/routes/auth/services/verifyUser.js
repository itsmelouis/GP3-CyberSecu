import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Database from '../../../database.js';

dotenv.config();

export const verifyUser = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    Database.db.get(
      'SELECT id, email, password FROM users WHERE email = ?',
      [email],
      async (error, user) => {
        if (error) reject(error);
        else {
          if (!user?.email) reject({ code: 404 });
          else {
            const isPasswordValid = await bcrypt.compare(
              password,
              user.password
            );
            if (!isPasswordValid) reject({ code: 401 });
            else {
              const payload = {
                id: user.id,
                email: user.email,
              };
              const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: '1h',
              });
              resolve(token);
            }
          }
        }
      }
    );
  });
};
