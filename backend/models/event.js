const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//events Schema
const EventsSchema = new Schema({
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    // date: {
    //     type: String,
    //     required: true,
    // },
    description: {
        type: String,
    },
})


module.exports = Event = mongoose.model('Event', EventsSchema);