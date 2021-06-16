const Movie = require('../models').Movie;

const getAllMovies = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.json(movies)
    })
}

const getMovieById = (req, res) => {
    Movie.findByPk(req.params.movieId)
    .then(foundMovie => {
        res.json(foundMovie)
    }) 
}

module.exports = {
    getAllMovies,
    getMovieById
}