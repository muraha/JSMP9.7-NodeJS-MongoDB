const router = require('express').Router();
// let devices = require('../data/device');

const Device = require('../models/device');

router.get('/', (req, res) => {
  Device.find((err, docs) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const devices = docs.map(doc => ({
      id: doc._id,
      name: doc.name,
      address: doc.address,
      isOn: doc.isOn,
    }))

    res.json(devices);
  });
});

router.post('/:id', async (req, res) => {
  const isOn = req.body.isOn;
  const id = req.params.id;

  await Device.findByIdAndUpdate(id, {
    isOn
  }).exec();

  res.sendStatus(201)
})

router.post('/', async (req, res) => {
  const device = req.body;
  // devices.push({ ...device }) //before mongo
  await Device.create({
    name: device.name,
    address: device.address,
    isOn: false,
  });
  res.sendStatus(201)
});

router.delete(`/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    await Device.findByIdAndRemove(id).exec()
    // devices = devices.filter(device => device.id != id); //before mongo
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }

})

module.exports = router;
