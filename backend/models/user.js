module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      /**
       * It wouldn't hurt to enforce uniqueness here. Unique salts should
       * make the hashes unique even if two passwords are the same.In the
       * event that a salt is not unique _and_ two passwords are the same,
       * an exception should be raised and another salt generated until
       * the uniqueness constraint is satisfied.
       */
      unique: true,
      allowNull: true,
      default: null,
      get() {
        return () => this.getDataValue('password_hash');
      },
      field: 'password_hash',
    },
    passwordSalt: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      default: null,
      get() {
        return () => this.getDataValue('password_salt');
      },
      field: 'password_salt',
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    master: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true,
    },
    lockoutCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
      field: 'lockout_count',
    },
    securityQuestion: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
      field: 'security_question',
    },
    securityAnswer: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
      field: 'security_answer',
    },
  });
  return User;
};
