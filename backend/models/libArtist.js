/**
 * TODO
 *
 * Enable FULLTEXT searching on `name'.
 */
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('lib_artists', {
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
  return Artist;
};
