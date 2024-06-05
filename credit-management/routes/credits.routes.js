import Credits from '../database/models/credits.js';
import express from 'express';
const router = express.Router();


router.post('/credits/', async (req, res) => {
  req.body.credits = 0
  const usersCreditsToCreate = req.body;
  console.log(req.body)
  try {
    const credits = Credits.build(usersCreditsToCreate);

    await credits.save();
    res.send(credits);
  } catch (error) {
    res.send(error);
  }
});

router.patch('/credits/payment/:id', async (req, res) => {
  const id = req.params.id
  const amount = req.body.amount
  try {
    let userCredits = await Credits.findOne({ where: {id: id} });
    if (!userCredits){
      res.status(404).send({
        error: "User not found"
      })
    }
    else{
      userCredits.credits -= amount
      await userCredits.save()
      res.send({
        id: id,
        newAmount: userCredits.credits
      });
    }
  } catch (error) {
    res.status(404).send({error});
  }
});

router.patch('/credits/acquire/:id', async (req, res) => {
  const id = req.params.id
  const amount = req.body.amount
  try {
    let userCredits = await Credits.findOne({ where: {id: id} });
    if (!userCredits){
      res.status(404).send({
        error: "User not found"
      })
    }
    else {
      userCredits.credits += amount
      await userCredits.save()
      res.send({
        id: id,
        newAmount: userCredits.credits
      });
    }
  } catch (error) {
    res.status(404).send({error});
  }
});

export default router;
