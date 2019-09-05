module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('artists', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    table: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Message;
};
