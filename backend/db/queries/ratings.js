const { db } = require('../index');

const addRating = (req, res, next) => {

    db.none('INSERT INTO ratings(stars, movie_id) VALUES (${stars}, ${movie_id})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Added Rating'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

module.exports = {
    addRating
}