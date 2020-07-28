require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')



// middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/v1/bounties', require('./routes/v1/bounties'))
app.use('/v1/users', require('./routes/v1/users'))
app.use('/v1/events', require('./routes/v1/events'))
app.use('/v1/favorites', require('./routes/v1/favorites'))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.options('/bounties/:id', cors())
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://abc.com/', true);
// xhr.withCredentials = true;
// xhr.send(null);

// routes
app.get('/', (req, res) => {
    res.send(`I'LL START MY OWN SERVER... WITH BLACKJACK... AND HOOKERS!`)
})


//todo: delete test route
// app.get('/test', (req,res) => {
//     db.Bounty.find()
//         .then(bounties => res.send(bounties))
//         .catch(err => {
//             console.error(err)
//             res.send({message: 'Server Error'})
//         })
// })


//listen
app.listen(process.env.PORT || 3001, () => {
    console.log(`listening on ${process.env.PORT || 3001}`)
})