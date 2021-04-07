import express from 'express';
import User from '../models/userModel.js';
import { getToken } from '../util.js';

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ message: 'sai mat khau' });
    }
  });


  router.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'thong tin  khong hop  le' });
    }
  });

  export default router;