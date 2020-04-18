const mongoose = require('mongoose');    //importing mongoose package

const nbaSchema = mongoose.Schema({     //creating and defining the mongoose schema for the db 
    player:{ 
        type:String,
    require:true 
},
    value:{ 
        type:Number,
    require:true 
},
     team:{ 
        type:String,
    require:true 
},  })

module.exports =mongoose.model('nba', nbaSchema); //creating the model and naming it and giving the schema it will use