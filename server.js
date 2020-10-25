const express = require('express');
const app = express();
app.use(express.json());
app.post('/api', (req, res) => {
  res.send(req.body);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000);
