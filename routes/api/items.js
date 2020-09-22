const express = require('express');
const router = express.Router();

//Item model
const item = require('../../models/item')

//@route GET api/items
//@desc GET All items
//@access Public
router.get('/', (req, res) => {
     item.find()
     .then(items =>  res.json(items))
})

router.post('/', (req, res) => {
    const newItem = new item({
        name: req.body.name
    })

    newItem.save().then(item =>  res.json(item))
});

router.delete('/:id', (req, res) => {
    item.findByIdAndDelete(req.params.id)
    .then(() =>  res.json('item deleted'))
    .catch(err =>  res.json(err))
})
module.exports = router