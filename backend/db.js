const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const connInfo = require('../config');

let sequelize = new Sequelize(
  connInfo.dbName,
  connInfo.dbUser,
  connInfo.dbPasswd,
  {
    host: connInfo.dbServer,
    dialect: connInfo.dialect,
    port: connInfo.dbServerPort,
    protocol: connInfo.dbServerProtocol,
  },
);

module.exports._sequelize = sequelize;
module.exports._Sequelize = Sequelize;

module.exports.models = {};

fs.readdir(`${__dirname}/models`, (err, res) => {
  if (!err) {
    res
      .filter((element) => element.endsWith('.js'))
      .forEach((element) => {
        const elemBasename = element.replace(/\.js$/, '');
        console.log(
          `Adding model ${elemBasename} from ${__dirname}/models/${element}...`,
        );
        module.exports.models[
          elemBasename
        ] = require(`${__dirname}/models/${elemBasename}`)(
          sequelize,
          Sequelize,
        );

        // module.exports.models.user.generateSalt = () => {
        //   return crypto.randomBytes(16).toString('base64');
        // };

        // module.exports.models.user.encryptPassword = (plainText, salt) =>
        //   crypto
        //     .createHash('RSA-SHA256')
        //     .update(plainText)
        //     .update(salt)
        //     .digest('hex');

        // const setSaltAndPassword = (user) => {
        //   if (user.changed('password_hash')) {
        //     user.passwordSalt = module.exports.models.user.generateSalt();
        //     user.passwordHash = module.exports.models.user.encryptPassword(
        //       user.passwordHash(),
        //       user.passwordSalt(),
        //     );
        //   }
        // };
        // module.exports.models.user.beforeCreate(setSaltAndPassword);
        // module.exports.models.user.beforeUpdate(setSaltAndPassword);

        // module.exports.models.user.prototype.validatePassword = (
        //   enteredPassword,
        // ) =>
        //   module.exports.models.user.encryptPassword(
        //     enteredPassword,
        //     this.passwordSalt(),
        //   ) === this.passwordHash();
      });
  } else {
    console.log('Error adding models!');
    console.log(err);
    process.exit(1);
  }
});

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
