const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Load routes
const userRoutes = require('./routes/user.routes');
// app.use('/api/users', userRoutes);
app.use('/users', userRoutes); 
// app.get('/users', (req, res) => {
//   res.json([{ name: 'Alice' }, { name: 'Bob' }]);
// });

app.get('/', (req, res) => {
  res.send('🚀 API is runnings!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
