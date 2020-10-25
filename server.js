const express = require('express');
const app = express();

app.post('/api', (req, res) => {
  res.json(req.body);
});
app.listen(5000);
