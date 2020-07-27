const express = require('express')
const router = express.Router()
const db = require('../../models')


//index
router.get('/', (req,res) => {
    db.Bounty.find()
    .then(bounties => {
        res.send(bounties)
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
    // check the body of the request for empty strings and remove them from the body.
    // for(key in req.body) {
    //   if (!req.body[key]) {
    //     delete req.body[key]
    //   }
    //   if (key === 'hunters' && req.body.hunters) {
    //     req.body.hunters = req.body.hunters.split(',').map(hunter=>hunter.trim())
    //   }
    // }
    // console.log(`✨`)
    // console.log(req.body)
    db.Bounty.create(req.body)
      .then(newBounty => {
        console.log(newBounty)
        res.send(newBounty)
      })
      .catch(err => console.error(err))
  })



//show

router.get('/:id', (req,res) => {
    db.Bounty.findById(req.params.id)
    .then(bounty => {
        res.send(bounty.split(",").map(item=> item.trim()))
    })
    .catch(err => console.error(err))
})


//create

router.post('/', (req, res) => {
    // check the body of the request for empty strings and remove them from the body.
    for(key in req.body) {
      if (!req.body[key]) {
        delete req.body[key]
      }
      if (key === 'hunters' && req.body.hunters) {
        req.body.hunters = req.body.hunters.split(',').map(hunter=>hunter.trim())
      }
    }
    console.log(`✨`)
    console.log(req.body)
    db.Bounty.create(req.body)
      .then(newBounty => {
        res.send(newBounty)
      })
      .catch(err => console.error(err))
  })

//update

router.put('/:id', (req,res) => {
    db.Bounty.findOneAndUpdate(
        { _id: req.params.id },
        console.log(JSON.stringify(req.body).split(",").map(item => item.trim())),
        // {new:true}
    )
    .then(updatedBounty => {
        res.send(updatedBounty)
    })
    .catch(err => console.error(err))
})

//delete
router.delete('/:id', (req,res) => {
    db.Bounty.findOneAndDelete({ _id: req.params.id })
    .then(deletedItem => {
        console.log(deletedItem)
        res.send({message: 'Successful Deletion'})
    })
    .catch(err => console.error(err))
})



//EXPORT

module.exports = router