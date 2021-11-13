module.exports = {
    HOST: "database-1.cyv12jf2lgh7.eu-west-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "12345678",
    DB: "dodidb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };