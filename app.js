const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine', 'pug')
app.use(express.static('assets'))
app.use(express.json())
app.use(express.urlencoded())

const { Game, Review, Platform, sequelize } = require('./db/models')

app.get('/games', async(req, res) => {
    // D3
    const games = await Game.findAll({
        order: [['gameName']]
    })
    //D4
    completeRecords = []
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        let record = game.toJSON()
        const reviewData = await Review.findOne({
            where: {
                gameId: game.id
            },
            attributes: [
                [sequelize.fn('AVG', sequelize.col('rating')), 'avgRating']
            ]
        })
        record.avgRating = reviewData.toJSON().avgRating
        completeRecords.push(record)
    }
    // for (let i = 0; i < games.length; i++) {
    //     const game = games[i];
    //     let record = game.toJSON()
    //     const reviews = await Review.findAll({
    //         where: {
    //             gameId: game.id
    //         }
    //     })
    //     
    //     let ratingTotal = 0
    //     let ratingCount = 0
    //     for (let j = 0; j < reviews.length; j++) {
    //         const review = reviews[j];
    //         ratingTotal += review.rating
    //         ratingCount ++
    //     }
    //     record.avgRating = ratingTotal / ratingCount
    //     completeRecords.push(record)
    // }

    // If Review model is included in initial query:
    // for (let i = 0; i < games.length; i++) {
    //     const game = games[i];
    //     let record = game.toJSON()
    //     let reviews = record.Reviews
    //     let count = reviews.length
    //     let ratingTotal = 0
    //     for (let j = 0; j < reviews.length; j++) {
    //         const rev = reviews[j];
    //         ratingTotal = ratingTotal + rev.rating
    //     }
    //     record.avgRating = ratingTotal / count
    //     completeRecords.push(record)
    // }

    res.render('allgames.pug', {games: completeRecords})
})

app.get('/games/:id', async(req, res, next) => {
    //D3
    const game = await Game.findByPk(req.params.id, {
        include: [Platform, Review],
        order: [[Review, 'createdAt', 'ASC']]
    })
    //Will need to explain the need for an empty errors array
    //Show that the pug template breaks if no array is provided
    res.render('onegame.pug', {game, platforms: game.Platforms, reviews: game.Reviews, errors: []})
})

//D4
const reviewChecker = (req, res, next) => {
    let errors = []
    const {review, rating} = req.body

    // if (review.length < 5) {
    //     errors.push('Please provide a review longer than 5 characters')
    // }
    // if (!rating) {
    //     errors.push('Please provide a rating')
    // }
    // if (rating < 1 || rating > 5) {
    //     errors.push('Please provide a rating value between 1 and 5')
    // }
    req.errors = errors
    next()
}

app.post('/games/:id/reviews', reviewChecker,  async(req, res) => {
    //D4
    if (req.errors.length > 1) {
        const game = await Game.findByPk(req.params.id, {
            include: [Platform, Review],
            order: [[Review, 'createdAt', 'ASC']]
        })
        res.render('onegame.pug', { game, platforms: game.Platforms, reviews: game.Reviews, errors: req.errors })
    } else {
        //D3
        const {review, rating} = req.body
        const gameId = req.params.id
        const newReview = await Review.create({
            review,
            rating,
            gameId
        })
        res.redirect(`/games/${gameId}`)
    }
    
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))