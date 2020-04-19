const express  = require('express');
const router  = express.Router();

// CONTROLLERS
const applicationController = require('./../controllers/applicationConroller');

router
  .route('/')
  .get(applicationController.home)

  module.exports = router;