/**
 * TODO
 *
 * Enable FULLTEXT searching of `albumNumber'.
 *
 * Create foreign key references between `artistID'
 * and `artists.id'.
 */
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('albums', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    albumNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'album_number',
    },
    artistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'artist_id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
  });
  return Album;
};
