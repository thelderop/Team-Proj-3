const express = require('express')
const router = express.Router()
const db = require('../../models')

////////////// ROUTES

//Get Favorites
//Lists all of collection 'user' from database, as an array of JSON objects

//tells browser to execute this function on GET /routes/v1/favorites.js
router.get('/', (req, res) => {
    //query database, db.Favorite is exported from models/index.js 
    db.Favorite.find()
        // after backend waits for api(db) response, do the next thing (anonymous promise function) (favorites is the query returned from db)
        .then(favorites =>{
            //accept response as favorites, send to frontend
            res.send(favorites)
        })
    .catch(err => console.log(err))
})

//simple test route for debugging, no response expected from db
router.get('/test', function (req, res) {
    console.log(`successfully connected to backend!!!!!!!! favorites.js`)
})


// GET inevidial event, currently searches by parameter :id, having multiple calls of single type(get, post, ...) to a single location ('/') is problematic; (now /view/:id)
router.get('/view/:id', (req, res) => {
    //
    db.Favorite.findById(req.params.id)
        .then((favorite) => {
            res.send(favorite)
        }).catch(err => console.log('err in GET request favorite.js'))
})


// CREATE favorite within database
router.post('/addFave', (req, res) => {
    //doing this prevents an error in findOne query argument
    let eventTitle = req.body.title
    db.Favorite.findOne({ title: eventTitle })
        .then(favorite => {
            //if favorite searched for is found, return error
            if (favorite) {
                return console.log('error, favorite already exists in collection')
                //else insert() in db
            } else {
                //I'd like to figure out how to clean this up to be more readable.
                const newFavorite = new Favorite({
                    title: req.body.title,
                    location: req.body.location,
                    date: req.body.date,
                    description: req.body.description,
                    // userId: req.body.userId
                })
                //creates object, I may try to pass req.body here
                newFavorite.save()
                    //sets response to new json object - I'm not entirely sure how this works.
                    .then(fave => res.json(fave))
            }
        })
        .catch(err => console.log(err))
})

//GET UPDATE
//Stretch
router.put('/updateFaveByName/:name', (req, res) => {
    //currently searches by req.params, this can be simpler with req.body
    db.Favorite.findOneAndUpdate(
        // find the document
        { title: req.params.name },
        //define new document content (currently overwrites all values)
        { title: req.body.title, location: req.body.location, description: req.body.description, date: req.body.date }
    )
        //promise function to be run after db sends response
        .then(updatedFavorite => {
            res.send(updatedFavorite)
        })
        .catch(err => console.error(err))
})

//GET DELETE
//stretch
router.delete('/deleteFaveById/:id', (req, res) => {
    db.Event.findOneAndDelete(
        //document to be deleted
        { _id: req.params.id }
    )
        .then(deleteFavorite => {
            res.send({ Message: 'Event Deleted' })
        })
        .catch(err => { console.error(err) })
})

module.exports = router