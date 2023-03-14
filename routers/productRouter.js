import express from 'express';
import { addProduct, getAllProduct } from '../controller/sequelizeController/productController.js';

const productRouter = express.Router();

productRouter.get('/product', getAllProduct);
productRouter.post('/product', addProduct);

export default productRouter;
