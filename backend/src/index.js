// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for the frontend URL defined in .env
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Parse incoming JSON requests
app.use(express.json());
const userRoutes = require('./routes/user.routes');
// const authRoutes = require('./routes/auth.routes');

app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// Sample route (you can later move this into routes folder)
app.get('/', (req, res) => {
  res.send('🚀 API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
