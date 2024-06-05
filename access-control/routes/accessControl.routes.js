import express from 'express';
import Access from '../database/models/access.js';
import { payment } from '../services/creditManagement.js';
import { parking } from '../services/parkingAvailability.js';
import { getCategory } from '../services/users.js';
import { gateControl } from '../services/gateControl.js';

const router = express.Router(),
 HTTP_FORBIDDEN_STATUS_CODE = 403;


router.post('/enter/', async (req, res) => {
  const accessToLog = req.body;
  const access = Access.build(accessToLog);
  access.operation = 'Entrada';

  await access.save();

  if(await parking.in(access.parkId) === HTTP_FORBIDDEN_STATUS_CODE){
    res.send({error: 'Park is full!'});
  }
  console.log(access.toJSON());
  await gateControl.in(access.parkId);
  res.send({message: 'Entered!'});
  // try {
  // } catch (error) {
  //   res.status(404).send(error);
  // }
});

router.post('/exit/', async (req, res) => {
  const accessToLog = req.body;
  try {
    const access = Access.build(accessToLog);
    access.operation = 'Saida';
    await access.save();

    console.log('Access to exit: ', access.toJSON());

    let response = await getCategory(access.userId);
    console.log('Category: ', response);

    if(response.category === 'Estudante' || response.category === 'Visitante'){
      await payment(access.userId, 5);
      console.log('Payment done!');
    }

    await parking.out(access.parkId);
    await gateControl.out(access.parkId);
    res.send({message: 'Exited!'});
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;
