const express = require('express');
const { Client } = require('cassandra-driver');
const app = express();

const client = new Client({
  contactPoints: ['cassandra'],
  localDataCenter: 'datacenter1',
  keyspace: 'analytics',
});

app.get('/', async (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
