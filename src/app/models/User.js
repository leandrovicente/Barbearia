module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    name: DataTypes.BOLLEAN,
    email: DataTypes.BOLLEAN,
    avatar: DataTypes.BOLLEAN,
    password_hash: DataTypes.BOLLEAN,
    provider: DataTypes.BOLLEAN
  });

  return User;
};
