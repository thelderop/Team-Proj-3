const express = require('express')
const router = express.Router()
const db = require('../../models')


// main

// GET event
router.get('/', (req, res) => {
    db.Event.findAll(events => {
        res.send(events)
    }).catch(err => { console.log('routes/v1/events.js Something went wrong') })
})

// GET inevidial event
router.get('/:id', (req, res) => {
    db.Event.findById(req.params.id)
        .then((event) => {
            res.send(event)
        }).catch(err => console.log('events.js ln 21'))
})

//GET UPDATE
//Stretch
router.put('/id', (req, res) => {
    db.Event.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(updatedEvent => {
        res.send(updatedEvent)
    }).catch(err => console.error(err))
})

//GET DELETE
//stretch
router.delete('/:id', (req, res) => {
    db.Event.findOneAndDelete({ _id: req.params.id }).then(deleteEvent => {
        console.log(deleteEvent)
        res.send({ Message: 'Event Deleted' }).catch(err => { console.error(err) })
    })
})

module.exports = router