const express = require('express')
const router = express.Router()
const db = require('../../models')

//Get Favorites
router.get('/', (req, res) => {
    db.Favorite.findAll(favorites => {
        res.send(favorites)
    })
})

// GET inevidial event
router.get('/:id', (req, res) => {
    db.Event.findById(req.params.id)
        .then((favorite) => {
            res.send(favorite)
        }).catch(err => console.log('favorite.js ln 17'))
})

//GET UPDATE
//Stretch
router.put('/id', (req, res) => {
    db.Event.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(updatedFavorite => {
        res.send(updatedFavorite)
    }).catch(err => console.error(err))
})

//GET DELETE
//stretch
router.delete('/:id', (req, res) => {
    db.Event.findOneAndDelete({ _id: req.params.id }).then(deleteFavorite => {
        console.log(deleteFavorite)
        res.send({ Message: 'Event Deleted' }).catch(err => { console.error(err) })
    })
})

module.exports = router