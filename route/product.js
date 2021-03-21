import express from 'express';
const router = express.Router();

import Product from '../models/product';

router.post('/new-product', async(req, res) => {
  const body = req.body;  
  try {
    const productDB = await Product.create(body);
    res.status(200).json(productDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error',
      error
    })
  }
});

router.get('/product/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const productDB = await Product.findOne({_id});
    res.json(productDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error',
      error
    })
  }
});

router.get('/product', async(req, res) => {
  try {
    const productDB = await Product.find();
    res.json(productDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error',
      error
    })
  }
});

router.delete('/product/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const productDB = await Product.findByIdAndDelete({_id});
    if(!productDB){
      return res.status(400).json({
        mensaje: 'The indicated id was not found',
        error
      })
    }
    res.json(productDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error',
      error
    })
  }
});

router.put('/product/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const productDB = await Product.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(productDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error',
      error
    })
  }
});

module.exports = router;