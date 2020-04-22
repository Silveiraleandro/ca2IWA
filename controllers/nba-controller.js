const NbaPlayer = require('./../models/nbaPlayer');

exports.home = async (req, res, next) => {
  const _players = await NbaPlayer.find({})
  const players = [];
//parsing the mongo objects that are in the array to json 
  _players.map((p) => {
    players.push(p.toJSON());
  });
  res.render('home', { players: players });
};
//creating an object player and redirecting the index page
exports.createNbaPlayer = async (req, res, next) => {
  const player = await NbaPlayer.create(req.body);
  res.redirect('/');
};
//updating an object player and redirecting the index page
exports.updateNbaPlayer = async (req, res, next) => {
    const player = await NbaPlayer.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true
    });
    
    res.redirect('/');
};
//deleting an object player and redirecting the index page
exports.deleteNbaPlayer = async (req, res, next) => {
  await NbaPlayer.findByIdAndDelete(req.body.id);

  res.redirect('/');
};
