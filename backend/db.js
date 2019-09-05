const crypto = require('crypto');
const Sequelize = require('sequelize');
const connInfo = require('../config');

let sequelize = new Sequelize(
  connInfo.dbName,
  connInfo.dbUser,
  connInfo.dbPasswd,
  {
    host: connInfo.dbServer,
    dialect: 'mysql',
    port: connInfo.dbServerPort,
    protocol: connInfo.dbServerProtocol,
  },
);

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  passwordHash: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
    default: null,
    get() {
      return () => this.getDataValue('password_salt');
    },
    field: 'password_salt',
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: false,
  },
  master: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: false,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: true,
  },
  lockoutCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    default: 0,
    field: 'lockout_count',
  },
  securityQuestion: {
    type: Sequelize.STRING,
    allowNull: true,
    default: null,
    field: 'security_question',
  },
  securityAnswer: {
    type: Sequelize.STRING,
    allowNull: true,
    default: null,
    field: 'security_answer',
  },
});

User.generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = (plainText, salt) =>
  crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');

const setSaltAndPassword = (user) => {
  if (user.changed('password_hash')) {
    user.passwordSalt = User.generateSalt();
    user.passwordHash = User.encryptPassword(
      user.passwordHash(),
      user.passwordSalt(),
    );
  }
};
User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

User.prototype.validatePassword = (enteredPassword) =>
  User.encryptPassword(enteredPassword, this.passwordSalt()) ===
  this.passwordHash();

module.exports.sync = (success) => {
  sequelize.sync().then(success);
};

module.exports.getUserById = (id) => {
  /**
   * Takes an integer UID and returns the corresponding user's
   * information from the database.
   *
   * If the user does not exist, `null' is returned.
   */
};

module.exports.addUser = (
  username,
  password,
  confirmPassword,
  admin,
  master,
  securityQuestion,
  securityAnswer,
) => {
  if (password !== confirmPassword) {
    throw 'Passwords do not match';
  }
};
