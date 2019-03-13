const { db } = require('../index');

const getMovieComments = (req, res, next) => {
    let movieId = parseInt(req.params.id);

    db.one('SELECT * FROM comments WHERE movie_id=$1', [movieId])
    .then(comments => {
        res.status(200)
        .json({
            status: 'Success',
            comments,
            message: `Received movie(${movieId}) comments`
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
    getMovieComments
}