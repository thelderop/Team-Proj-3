// import mongoose
const mongoose = require('mongoose')


const uri = process.env.MONGOD_URI


const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// routes


// set up mongoose connection
mongoose.connect(uri || 'mongodb://localhost/eventTracker',
{useNewUrlParser: true}
)
.then(() => { console.log('MongoDB Connected... (^///^)') })
.catch(err => console.log(err))
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
