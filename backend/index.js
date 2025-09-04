const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic health check endpoint
app.get('/', (req, res) => {
  res.send('FixMyCity backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});