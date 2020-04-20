const express  = require('express');
const router  = express.Router();

// CONTROLLERS
const applicationController = require('./../controllers/nba-controller');
//router get and post that will create players and post it
router
  .route('/')
  .get(applicationController.home)
  .post(applicationController.createNbaPlayer);
//router to delete players
router
  .route('/delete')
  .post(applicationController.deleteNbaPlayer);

  module.exports = router;