import Access from '../database/models/access.js';
import { payment } from '../services/creditManagement.js';
import { parking } from '../services/parkingAvailability.js';
import express from 'express';
import { getCategory } from '../services/users.js';

const router = express.Router(),
 HTTP_SUCCESS_STATUS_CODE = 200,
 HTTP_FORBIDDEN_STATUS_CODE = 403;


router.post('/enter/', async (req, res) => {
  const accessToLog = req.body;
  try {
    const access = Access.build(userToCreate);
    access.operation = 'Entrada';
    if(parking.in(access.parkId) === HTTP_FORBIDDEN_STATUS_CODE){
      res.send({error: 'Park is full!'});
    }

    await access.save();
    //liberar catraca
    res.send({message: 'Access granted!'});
  } catch (error) {
    res.send(error);
  }
});

router.post('/exit/', async (req, res) => {
  const accessToLog = req.body;
  try {
    const access = Access.build(userToCreate);
    access.operation = 'Saida';

    let response = await getCategory(access.userId);
    if(response.category === 'Estudante' || response.category === 'Visitante'){
      await payment(access.userdId, 5);
    }

    await parking.out(access.parkId);
    await access.save();
    //liberar catraca
    res.send({message: 'Exited!'});
  } catch (error) {
    res.send(error);
  }
});

export default router;
