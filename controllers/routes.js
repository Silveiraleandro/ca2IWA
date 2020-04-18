const express = require('express');      //importing express and saving it inside this file
const router = express.Router();         //calling the router with express
const post = require('../models/nba');

router.get('/nba', (req,res) => {          //creating routes
    res.send('posting in the url');
});

router.post('/nba', (req,res) => {
    const post = new post({
        player:req.body.player,
        value:req.body.value,
        team:req.body.team

    });
    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});
router.get('/nba', (req,res) => {
    const post = new post({
        player:req.body.player,
        value:req.body.value,
        team:req.body.team

    });
    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});
router.delete('/nba', (req,res) => {
    const post = new post({
        player:req.body.player,
        value:req.body.value,
        team:req.body.team

    });
    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

module.exports = router;  //exporting the router