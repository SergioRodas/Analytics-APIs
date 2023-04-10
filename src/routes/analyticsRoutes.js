const express = require('express');
const analyticsController = require('../controllers/analyticsController');

const router = express.Router();

module.exports = (client, analyticsModel) => {
  router.post('/', (req, res) => analyticsController.createRequest(req, res, client, analyticsModel));
  router.get('/', (req, res) => analyticsController.getAllRequests(req, res, client, analyticsModel));
  return router;
};
