const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/movies', ctrl.movies.getAllMovies);
router.get('/:movieId', ctrl.movies.getMovieById);

module.exports = router;