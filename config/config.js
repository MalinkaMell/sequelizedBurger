module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PWD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "lollipop",
    "database": "burgers_sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable" : "JAWSDB_URL",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
