import express from 'express';
const router = express.Router();


router.post('/gateControl/in/:id', async (req, res) => {
  console.log({
    parking_lot_id: req.params.id,
    gate: "in",
    command: "open"
  })
  res.send({
    parking_lot_id: req.params.id,
    gate: "in",
    command: "open"
  });
});

router.post('/gateControl/out/:id', async (req, res) => {
  console.log({
    parking_lot_id: req.params.id,
    gate: "out",
    command: "open"
  })
  res.send({
    parking_lot_id: req.params.id,
    gate: "out",
    command: "open"
  });
});

export default router;
