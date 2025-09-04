const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Store complaints in-memory (for now)
let complaints = [];

// Health check
app.get('/', (req, res) => {
  res.send('FixMyCity backend is running.');
});

// Submit a new complaint
app.post('/complaints', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  const complaint = {
    id: complaints.length + 1,
    title,
    description,
    createdAt: new Date()
  };
  complaints.push(complaint);
  res.status(201).json({ message: 'Complaint submitted!', complaint });
});

// Get all complaints
app.get('/complaints', (req, res) => {
  res.json({ complaints });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
