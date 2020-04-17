const express = require('express');      //importing express and saving it inside this file

const router = express.Router();         //calling the router with express

router.get('/', (req,res) =>{          //creating routes
    res.send('posting in the url')
});

module.exports = router;  //exporting the router