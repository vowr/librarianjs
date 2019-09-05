/**
 * TODO
 *
 * Enable FULLTEXT searching on `title'
 *
 * Configure foreign key references for artist,
 * album, category, user (created, modified),
 * and commit message IDs
 */
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('songs', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'artist_id',
    },
    albumID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'album_id',
    },
    media: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    side: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    track: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    performanceType: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
      field: 'performance_type',
    },
    canadian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    display: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Song;
};
