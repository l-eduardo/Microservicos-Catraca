import User from '../database/models/user.js';
import { createUserCredit } from '../services/creditManagement.js';
import express from 'express';

const router = express.Router(),
 HTTP_SUCCESS_STATUS_CODE = 200,
 HTTP_NOT_FOUND_CODE = 404;

router.post('/users/', async (req, res) => {
  const userToCreate = req.body;
  console.log('Creating user: ', userToCreate);
  try {
    const user = User.build(userToCreate);
    await user.save();

    if(await createUserCredit(user.id) !== HTTP_SUCCESS_STATUS_CODE) {
      throw new Error('Failed to create user credit');
    }

    console.log('User created: ', user.toJSON());
    res.send(user);
  } catch (error) {
    res.status(HTTP_NOT_FOUND_CODE).send({error});
  }
});

router.get('/users/:id/category', async (req, res) => {
  console.log('Getting user category: ', req.params.id);

  try{
    const user = await User.findOne({where: {id: req.params.id}});
    console.log('Getting user category: ', req.params.id);

    if (!user){
      console.log('User not found');
      res.status(HTTP_NOT_FOUND_CODE).send({
        error: "User not found"
      });
    }

    res.send({
      category: user.category
    });
  } catch (error) {
    res.status(HTTP_NOT_FOUND_CODE).send({error});
  }
});

router.get('/healtcheck', (req, res) => res.status(HTTP_SUCCESS_STATUS_CODE).send('OK'));


export default router;
