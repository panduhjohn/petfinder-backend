const express = require('express');
const router = express.Router();

const Animal = require('../models/Animal');

//! Get All Animals
router.get('/animals', (req, res) => {
    Animal.find({}).then((animals) => {
        return res.json(animals);
    });
});

//! Get Single Animal
router.get('/animal/:id', (req, res) => {
    Animal.findById({ _id: req.params.id }).then((animal) => {
        return res.json(animal);
    });
});

//! Create Animal
router.post('/animal', (req, res) => {
    const newAnimal = new Animal();

    newAnimal.name = req.body.name;
    newAnimal.breed = req.body.breed;
    newAnimal.size = req.body.size;
    newAnimal.gender = req.body.gender;
    newAnimal.coat = req.body.coat;

    newAnimal.save().then((animal) => {
        return res.json(animal);
    });
});

//! Update Animal
router.put('/animal/:id', (req, res) => {
    Animal.findById({ _id: req.params.id }).then((animal) => {
        animal.name = req.body.name ? req.body.name : animal.name;
        animal.breed = req.body.breed ? req.body.breed : animal.breed;
        animal.size = req.body.size ? req.body.size : animal.size;
        animal.gender = req.body.gender ? req.body.gender : animal.gender;
        animal.coat = req.body.coat ? req.body.coat : animal.coat;
        animal.save().then((animal) => {
            res.json(animal);
        });
    });
});

//! Delete Animal WORKS
router.delete('/animal/:id', (req, res) => {
    Animal.findByIdAndDelete({ _id: req.params.id }).then(
        res.json({ message: 'Animal Deleted' })
    );
});

module.exports = router;
