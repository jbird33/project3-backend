const User = require('../models').User;
const Movie = require('../models').Movie;

const signup = (req,res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const login = (req,res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)
    })
}

const getProfile = (req, res) => {
    User.findByPk(req.params.index)
    .then(userProfile => {
        Movie.findAll()
        .then(allMovies => {
            res.json({
                user: userProfile,
                movie: allMovies

            })
        })
    })
}

module.exports = {
    signup,
    login,
    getProfile
}