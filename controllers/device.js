const router = require('express').Router();
let devices = require('../data/device');

router.get('/', (req, res) => {
  res.json(devices);
});

router.post('/', (req, res) => {
  const device = req.body;
  devices.push({ ...device })
  res.send('Device was added')
});

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  console.log(id);
  devices = devices.filter(device => device.id != id);
  res.send('selected Device was deleted' + id)
})

module.exports = router;
