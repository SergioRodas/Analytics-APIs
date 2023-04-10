const createRequest = async (client, id, apiName, routeAccessed, userIp, userAgent, location, createdAt) => {
  const query = 'INSERT INTO analytics.requests (id, api_name, route_accessed, user_ip, user_agent, location, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const params = [id, apiName, routeAccessed, userIp, userAgent, location, createdAt];
  await client.execute(query, params, { prepare: true });
};

const getAllRequests = async (client) => {
  const query = 'SELECT * FROM analytics.requests';
  const result = await client.execute(query);
  return result.rows;
};

module.exports = { createRequest, getAllRequests };
