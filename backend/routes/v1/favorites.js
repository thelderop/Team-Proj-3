const express = require('express')
const router = express.Router()
const db = require('../../models')

//Get Favorites
router.get('/', (req, res) => {
    db.Favorite.find()
        .then(favorites => {
        res.send(favorites)
    })
    .catch(err => console.log(err))
})

router.get('/test', function (req, res) {
    console.log(`successfully connected to backend!!!!!!!! favorites.js`)
})

// GET inevidial event
router.get('/:id', (req, res) => {
    db.Event.findById(req.params.id)
        .then((favorite) => {
            res.send(favorite)
        }).catch(err => console.log('err in GET request favorite.js'))
})


// CREATE favorite within database
router.post('/addFave', (req,res) => {
    let eventTitle = req.body.title
    db.Favorite.findOne({ title: eventTitle})
    .then(favorite => {
        if (favorite) {
            return console.log('error, favorite already exists in collection')
        } else {
            const newFavorite = new Favorite({
                title: req.body.title,
                location: req.body.location,
                date: req.body.date,
                description: req.body.description,
                // userId: req.body.userId
            })
            newFavorite.save()
            .then(fave => res.json(fave))
        }
    })
    .catch(err => console.log(err))
})

//GET UPDATE
//Stretch
router.put('/updateFaveByName/:name', (req, res) => {
    db.Favorite.findOneAndUpdate(
        { title: req.params.name },
        { title: req.body.title, location: req.body.location, description: req.body.description, date: req.body.date}
    )
        .then(updatedFavorite => {
        res.send(updatedFavorite)
    })
    .catch(err => console.error(err))
})

//GET DELETE
//stretch
router.delete('/deleteFaveById/:id', (req, res) => {
    db.Event.findOneAndDelete({ _id: req.params.id }).then(deleteFavorite => {
        console.log(deleteFavorite)
        res.send({ Message: 'Event Deleted' }).catch(err => { console.error(err) })
    })
})

module.exports = router