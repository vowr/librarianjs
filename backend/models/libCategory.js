/**
 * TODO
 *
 * Enable FULLTEXT searching on `name'.
 */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('lib_categories', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return Category;
};
