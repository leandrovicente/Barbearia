module.exports = (sequelize, dataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: dataTypes.DATE
  });
  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { as: "user", foreignKey: "user_id" });
    Appointment.belongsTo(models.User, { foreignKey: "provider_id" });
    Appointment.belongsTo(models.User, {
      as: "provider",
      foreignKey: "provider_id"
    });
  };
  return Appointment;
};
