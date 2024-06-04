import ParkingAvailability from '../database/models/parking_availability.js';
import express from 'express';
const router = express.Router();


router.post('/parkingLot/', async (req, res) => {
  req.body.availableParkingSpaces = req.body.totalParkingSpaces
  const parkingLotToCreate = req.body;
  console.log(req.body)
  try {
    const parkingLot = ParkingAvailability.build(parkingLotToCreate);
    await parkingLot.save();
    res.send(parkingLot);
  } catch (error) {
    res.send(error);
  }
});

router.patch('/parkingLot/in/:id', async (req, res) => {
  const id = req.params.id
  let parkingLot = await ParkingAvailability.findOne({ where: {id: id} });
  if (!parkingLot){
    res.status(404).send({
      error: "Parking lot not found"
    })
  }
  if (parkingLot.availableParkingSpaces == 0){
    res.status(403).send({
      error: "Parking lot is full"
    })
  } 
  else {
    parkingLot.availableParkingSpaces -= 1
    await parkingLot.save()
    res.send({
      id: id,
      newAvailableParkingSpaces: parkingLot.availableParkingSpaces
    });
  }
});

router.patch('/parkingLot/out/:id', async (req, res) => {
  const id = req.params.id
  let parkingLot = await ParkingAvailability.findOne({ where: {id: id} });
  if (!parkingLot){
    res.status(404).send({
      error: "Parking lot not found"
    })
  } 
  else {
    parkingLot.availableParkingSpaces += 1
    await parkingLot.save()
    res.send({
      id: id,
      newAvailableParkingSpaces: parkingLot.availableParkingSpaces
    });
  }
});

export default router;
