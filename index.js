const express = require('express');
const app = express();
const deviceRouter = require('./controllers/device');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsmp97-nodejs-mongodb');


app.use(express.json());
app.use('/api/device', deviceRouter);

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  });
});


app.listen(3001);
