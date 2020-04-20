const NbaPlayer = require('./../models/nbaPlayer');

exports.home = async (req, res, next) => {
  const _players = await NbaPlayer.find({})
  const players = [];

  _players.map((p) => {
    players.push(p.toJSON());
  });
  res.render('home', { players: players });
};

exports.createNbaPlayer = async (req, res, next) => {
  const player = await NbaPlayer.create(req.body);
  res.redirect('/');
};

exports.deleteNbaPlayer = async (req, res, next) => {
  await NbaPlayer.findByIdAndDelete(req.body.id);

  res.redirect('/');
};
