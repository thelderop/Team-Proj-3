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
    comments: [{
        commentBy: mongoose.Types.ObjectId,
        ref: 'User',
        comment: String
    }],
})


module.exports = Favorite = mongoose.model('favorites', FavoritesSchema);