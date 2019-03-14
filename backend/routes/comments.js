const express = require('express');
const router = express.Router();
const { createComment } = require('../db/queries/comments');

router.post('/', createComment);

module.exports = router;