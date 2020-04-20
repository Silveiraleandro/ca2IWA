const mongoose = require('mongoose');
//creating and defining the mongoose schema for the db 
const nbaPlayerSchema = new mongoose.Schema({
  player: {
    type: String,
    require: [true, 'Player required']
  },
  value: {
    type: Number,
    require: [true, 'Value required']
  },
   team: {
   type: String,
   require: [true, 'Team required']
  },
});
//creating the model and naming it and giving the schema it will use
const NbaPlayer = mongoose.model('NbaPlayer', nbaPlayerSchema);

module.exports = NbaPlayer;