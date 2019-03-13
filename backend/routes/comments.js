const express = require('express');
const router = express.Router();
const { getMovieComments } = require('../db/queries/comments');

router.get('/:id', getMovieComments);

module.exports = router;