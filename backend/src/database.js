import sqlite3 from 'sqlite3';

class Database {
  constructor() {
    if (!Database.instance) {
      this.db = new sqlite3.Database('src/data/cyber_secu.sqlite');
      this.db.serialize(() => {
        this.db.run(
          'CREATE TABLE IF NOT EXISTS users (\
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          firstName TEXT NOT NULL,\
          lastName TEXT NOT NULL,\
          email TEXT UNIQUE NOT NULL,\
          password TEXT NOT NULL,\
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
        );
        Database.instance = this;
      });
      return Database.instance;
    }
  }
}

export default new Database();
