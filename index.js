const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB
require('./config/mongodb');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname + "/public/"));

// Routes
const AdminRoutes = require('./routes/AdminRoutes');
const CustomerRoutes = require('./routes/UserRoutes');

app.get("/", (req, res) => {
  res.send("Travel server is running ✅");
});

app.use('/admin', AdminRoutes);
app.use('/customer', CustomerRoutes);

// Seeder (only for development, not prod)
// const seeder = require('./config/seeder');
// seeder.addUser();

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});
