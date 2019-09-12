/**
 * TODO
 *
 * Enable FULLTEXT searching on `name'.
 */
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('lib_playlists', {
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
  return Playlist;
};
