module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };