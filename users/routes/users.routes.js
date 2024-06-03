import User from '../database/models/user.js';
import { createUserCredit } from '../services/creditManagement.js';
import express from 'express';

const router = express.Router(),
 HTTP_SUCCESS_STATUS_CODE = 200;

router.get('/', (req, res) => {
  res.send('GET all request received');
});

router.get('/:id', (req, res) => {
  res.send('GET request received');
});

router.post('/users/', async (req, res) => {
  const userToCreate = req.body;
  try {
    const user = User.build(userToCreate);

    if(createUserCredit(user.id) !== HTTP_SUCCESS_STATUS_CODE) {
      throw new Error('Failed to create user credit');
    }

    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id', (req, res) => {
  res.send(`DELETE request received for user with ID ${req.params.id}`);
});

export default router;
