const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    poc: 'dummy-poc',
    message: 'Hello from the self-service pipeline dummy POC',
    hostname: os.hostname(),
  });
});

app.get('/healthz', (req, res) => res.status(200).send('ok'));

app.listen(PORT, () => {
  console.log(`dummy-poc listening on port ${PORT}`);
});
