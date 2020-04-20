const express = require('express');
const router = express.Router();

const Dog = require('../models/Dog');

//! Get All Dogs
router.get('/dogs', (req, res) => {
    Dog.find({}).then((dogs) => {
        return res.json(dogs);
    });
});

//! Get Single Dog
router.get('/dog/:id', (req, res) => {
    Dog.findById({ _id: req.params.id }).then((dog) => {
        return res.json(dog);
    });
});

//! Create Dog
router.post('/dog', (req, res) => {
    const newDog = new Dog();

    newDog.name = req.body.name;
    newDog.breed = req.body.breed;
    newDog.size = req.body.size;
    newDog.gender = req.body.gender;
    newDog.coat = req.body.coat;

    newDog.save().then((dog) => {
        return res.json(dog);
    });
});

//! Update Dog
router.put('/dog/:id', (req, res) => {
    Dog.findById({ _id: req.params.id }).then((dog) => {
        dog.name = req.body.name ? req.body.name : dog.name;
        dog.breed = req.body.breed ? req.body.breed : dog.breed;
        dog.size = req.body.size ? req.body.size : dog.size;
        dog.gender = req.body.gender ? req.body.gender : dog.gender;
        dog.coat = req.body.coat ? req.body.coat : dog.coat;
        dog.save().then((dog) => {
            res.json(dog);
        });
    });
});

//! Delete Dog
router.delete('/dog/:id', (req, res) => {
    Dog.findByIdAndDelete({ _id: req.params.id }).then(
        res.json({ message: 'Dog Deleted' })
    );
});

module.exports = router;
