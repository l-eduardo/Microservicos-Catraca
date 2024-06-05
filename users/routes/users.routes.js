import User from '../database/models/user.js';
import { createUserCredit } from '../services/creditManagement.js';
import express from 'express';

const router = express.Router(),
 HTTP_SUCCESS_STATUS_CODE = 200,
 HTTP_NOT_FOUND_CODE = 404;

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

router.get('/users/:id/category', async (req, res) => {
  const user = await User.findOne({where: {id: req.query.id}});
  if (!user){
    res.status(HTTP_NOT_FOUND_CODE).send({
      error: "User not found"
    });
  }

  res.send({
    category: user.category
  });
});

export default router;
