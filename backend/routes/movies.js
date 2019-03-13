const express = require('express');
const router = express.Router();
const { getAllMovies,
        getMoviesByGenre,
        getSingleMovie } = require('../db/queries/movies');

router.get('/all', getAllMovies);
router.get('/genre/:id', getMoviesByGenre);
router.get('/:id', getSingleMovie);

module.exports = router;