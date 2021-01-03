const express = require('express');

const router = express.Router();

router.get('/pokemon', (req, res) => {
    const pokemon = [
        {
            name: 'Pikachu',
            description: 'the pika pokemon',
            type1: 'Electric',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Tackle',
                    type: 'Normal',
                    power: 40,
                }
            ]
        } , 
        {
            name: 'Snorlax',
            description: 'the sleepy pokemon',
            type1: 'Normal',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Tackle',
                    type: 'Normal',
                    power: 40,
                }
            ]
        }
    ]
    res.status(200).json({ pokemon });
});

router.post('/pokemon', (req, res) => {
    const { pokemon } = req.body;
    const { name, description, type1, imagine, moves} = pokemon;
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'invalid input'});
    } else {
        const pounchMoves = moves.filter((move) => move.name.includes('Punch'));
        res.status(200).json({ punchMoves });
    }
});

module.exports = router;