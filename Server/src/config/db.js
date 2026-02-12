const { Pool } = require("pg");

// Lấy thông tin kết nối từ biến môi trường
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "smartfit",
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

// Hàm giúp kết nối vào db
module.exports = {
  query: (text, params) => pool.query(text, params),
};
