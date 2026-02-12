const express = require('express');
const app = express();
const profileRoutes = require('./modules/profile/profile.route');

// Middleware xử lý JSON
app.use(express.json());

// Định tuyến cho các module
// API Versioning: /api/v1/...
app.use('/api/v1/profile', profileRoutes);

// Placeholder cho các module khác (khi nào implement xong thì uncomment)
// const planRoutes = require('./modules/plan/plan.route');
// app.use('/api/v1/plan', planRoutes);
// ...

app.get('/', (req, res) => {
  res.send('Server is running with Clean Architecture');
});

// Xử lý lỗi tập trung (Global Error Handler)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
