const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//

//favorites Schema
const FavoritesSchema = new Schema({
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    userId: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
})


module.exports = Favorite = mongoose.model('favorites', FavoritesSchema);