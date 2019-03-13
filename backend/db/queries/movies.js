const { db } = require('../index');

const getAllMovies = (req, res, next) => {
    db.any('SELECT m.id, m.title, m.img_url, g.genre, r.round AS movie_rating FROM movies AS m LEFT JOIN genres AS g ON g.id = m.genre_id FULL JOIN (SELECT ROUND(AVG(stars), 1), movie_id FROM ratings GROUP BY movie_id) AS r ON r.movie_id = m.id ORDER BY m.title')
    .then(movies => {
        res.status(200)
        .json({
            status: 'Successful',
            movies,
            message: 'Received all movies with genres and ratings'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Fail',
            message: err
        })
    });
};

const getSingleMovie = (req, res, next) => {
    let movieId = parseInt(req.params.id);

    db.one('SELECT m.id, m.title, m.img_url, g.genre, r.round AS movie_rating FROM movies AS m LEFT JOIN genres AS g ON g.id = m.genre_id FULL JOIN (SELECT ROUND(AVG(stars), 1), movie_id FROM ratings GROUP BY movie_id) AS r ON r.movie_id = m.id WHERE m.id=$1 ORDER BY m.title', [movieId])
    .then(movie => {
        res.status(200)
        .json({
            status: 'Success',
            movie,
            message: `Received movie${movieId}`
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

const getMoviesByGenre = (req, res, next) => {
    let genreId = parseInt(req.params.id);

    db.any('SELECT m.id, m.title, m.img_url, g.genre, r.round AS movie_rating FROM movies AS m LEFT JOIN genres AS g ON g.id = m.genre_id FULL JOIN (SELECT ROUND(AVG(stars), 1), movie_id FROM ratings GROUP BY movie_id) AS r ON r.movie_id = m.id WHERE g.id=$1 ORDER BY m.title', [genreId])
    .then(movies => {
        res.status(200)
        .json({
            status: 'Success',
            movies,
            message: `Received movies by genre(${genreId})`
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
    getAllMovies,
    getMoviesByGenre,
    getSingleMovie
}