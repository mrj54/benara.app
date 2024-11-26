const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const leaderboardRoutes = require('./backend/routes/leaderboardRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Rute
// app.use('/api/leaderboard', leaderboardRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Logika untuk memverifikasi username dan password
    // Contoh:
    if (username === 'admin' && password === 'password') {
        return res.status(200).json({ message: 'Login successful' });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});