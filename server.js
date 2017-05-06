const express = require('express')
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;


app.use('/public', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/favicon.ico', (req, res) =>
  res.status(200).set({ 'Content-Type': 'image/x-icon' }).send()
);

app.listen(PORT, () => {
  console.log('Spark listening on port 3000!')
});
