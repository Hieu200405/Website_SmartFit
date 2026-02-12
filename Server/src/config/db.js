const { Pool } = require('pg');

// Trong thực tế, nên dùng biến môi trường (process.env)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'smartfit',
  password: 'hieu123',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
