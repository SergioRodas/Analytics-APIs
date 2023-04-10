const { v4: uuidv4 } = require('uuid');

const createRequest = async (req, res, client, analyticsModel) => {
  const { apiName, routeAccessed, userIp, userAgent, location } = req.body;
  const id = uuidv4();
  const createdAt = new Date();

  try {
    await analyticsModel.createRequest(client, id, apiName, routeAccessed, userIp, userAgent, location, createdAt);
    res.status(201).json({ id, apiName, routeAccessed, userIp, userAgent, location, createdAt });
  } catch (error) {
    console.error('Error creating request', error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllRequests = async (req, res, client, analyticsModel) => {
  try {
    const requests = await analyticsModel.getAllRequests(client);
    res.json(requests);
  } catch (error) {
    console.error('Error getting all requests', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { createRequest, getAllRequests };
