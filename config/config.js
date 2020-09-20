require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HEROKU_USER,
    "password": process.env.HEROKU_PASSWORD,
    "database": process.env.HEROKU_DB,
    "host": process.env.HEROKU_HOST,
    "port": process.env.HEROKU_PORT,
    "dialect": "mysql",
    "operatorsAliases": 1,
    "use_env_variable": "JAWSDB_URL"
  }
}
