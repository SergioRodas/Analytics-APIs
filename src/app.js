const express = require('express');
const { Client } = require('cassandra-driver');
const analyticsRoutes = require('./routes/analyticsRoutes');
const analyticsModel = require('./models/analyticsModel');

const app = express();
const PORT = 3000;
const contactPoints = ['127.0.0.1'];

// Configuración de la conexión a la base de datos Cassandra
const client = new Client({
  contactPoints: ['cassandra'],
  localDataCenter: 'datacenter1'
});


app.get('/', async (req, res) => {
  res.send('Hola Mundo!');
});

// Conexión a la base de datos Cassandra
client.connect()
.then(() => {
  console.log('Connected to Cassandra');
  // Crear la keyspace y la tabla si no existen
  return client.execute(`
    CREATE KEYSPACE IF NOT EXISTS analytics
    WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
  `);
})
.then(() => {
  return client.execute(`
    CREATE TABLE IF NOT EXISTS analytics.requests (
      id uuid,
      api_name text,
      route_accessed text,
      user_ip text,
      user_agent text,
      location text,
      created_at timestamp,
      PRIMARY KEY (id)
    )
  `);
})
.catch((err) => {
  console.error('There was an error connecting to Cassandra', err);
  });

process.on('SIGINT', function() {
  console.log('Closing Cassandra connection');
  client.shutdown();
  process.exit();
});
// Configuración de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definición de rutas
app.use('/analytics', analyticsRoutes(client, analyticsModel));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, client };