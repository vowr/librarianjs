/**
 * TODO
 *
 * Create foreign key reference between `userID' here
 * and `id' in user.js.
 */
module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('lib_user_logins', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    remoteIPAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'remote_ip_address',
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Login;
};
