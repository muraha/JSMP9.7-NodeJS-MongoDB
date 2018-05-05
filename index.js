const express = require('express');
const app = express();
const deviceRouter = require('./controllers/dedvice');

  app.use(express.json());
app.use('/api/device', deviceRouter);

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  });
});


app.listen(3002);
