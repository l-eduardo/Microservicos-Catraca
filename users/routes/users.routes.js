import User from '../database/models/user.js';
import express from 'express';
const router = express.Router();


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
