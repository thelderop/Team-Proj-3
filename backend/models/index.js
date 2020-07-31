// import mongoose
const mongoose = require('mongoose')


// set up mongoose connection
<<<<<<< HEAD
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/eventTracker',
=======
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/eventTracker',
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/eventTracker',
>>>>>>> 7ef64a0e41a9f6018a2c73e0b248c4c061fd238c
{useNewUrlParser: true}
)
let db = mongoose.connection

// set up console log to confirm it's running
db.once('open', () => {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
    console.log(`connected to database ${db.name}`)
})
db.on('error', err => {
    console.log(`FFFFFFFFFFFFFFFFFF database error:`)
    console.error(err)
})


// export all our models

module.exports.User = require('./user')
module.exports.Favorite = require('./favorite')
module.exports.Event = require('./event')
