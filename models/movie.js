'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Movie.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    director: DataTypes.STRING,
    rating: DataTypes.STRING,
    rottenTomatoesScore: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};