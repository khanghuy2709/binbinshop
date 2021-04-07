import expressAsyncHandler from 'express-async-handler'
  
import express from 'express';

const app = express()



import cors from 'cors'

import mongoose from'mongoose';

import router from './routes/userRouter.js';
import xroute from './routes/orderRoute.js'

app.use(cors())
app.use(express.static('build'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const port  = process.env.PORT || 3001



mongoose.connect('mongodb+srv://khang:12345@cluster0.vxi0g.mongodb.net/sanpham?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});



const thietbiSchema = new mongoose.Schema({
  ten: String,
  danhgia:Number,
  mota:String,
  kichthuoc:Number,
  ngay:String,
  url:String,
  gia:Number
  
});

const thietbi = mongoose.model('Thietbi', thietbiSchema);

app.use('/users',router);
app.use('/orders', xroute);

app.get('/', (req, res) => {
  res.send('mua thua khong lang day')
})
app.get('/showall', (req, res) => {
  
  thietbi.find({}).then(result => {
    res.send(result)
   })
  
})

app.get('/show/',expressAsyncHandler (async (req, res) => {
  const ten = req.query.name || '';
  const nameFilter = ten ? { ten: { $regex: ten, $options: 'i' } } : {};


   const products=await thietbi.find({...nameFilter })

   res.send({products})
})
)

app.get(
  '/show/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await thietbi.findById({_id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
