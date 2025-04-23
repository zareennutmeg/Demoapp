const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const { Server } = require('http');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',         //  Replace with your DB user
  host: 'localhost',      // Replace with your DB host
  database: 'nutmeg_digital', // Replace with your DB name
  password: 'Yasir@123', //Replace with your DB password
  port: 5432,
});



/// GET latest welcome message
app.get('/api/message', async (req, res) => {
    try {
      const result = await pool.query(
        'SELECT message FROM welcome_message ORDER BY id DESC LIMIT 1'
      );
      res.json({ message: result.rows[0]?.message || 'No message found' });
    } catch (err) {
      console.error('Error fetching message:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 // Serve React build files from the correct folder
app.use(express.static(path.join(__dirname, 'nutmeg-frontend/build')));

// Catch-all route for React app (handle client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'nutmeg-frontend/build', 'index.html'));
});
  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });