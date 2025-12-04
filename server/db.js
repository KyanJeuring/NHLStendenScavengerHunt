const { Pool } = require('pg');

// The Pool will read connection params from env vars if not provided here.
// Supported env vars: PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT
// If you run the server on the same machine as Docker Compose exposing Postgres
// to localhost (port 5432), ensure those env vars are set (or defaults point to localhost).

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
