const { db } = require('../index');

const createComment = (req, res, next) => {
    db.none('INSERT INTO comments(comment, movie_id) VALUES (${comment}, ${movie_id})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created a comment'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

module.exports = {
    createComment
}