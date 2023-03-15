import express from 'express';
import { addProduct, deleteProduct, editProduct, getAllProduct, getProductById } from '../controller/sequelizeController/productController.js';

const productRouter = express.Router();

productRouter.get('/product', getAllProduct);
productRouter.post('/product', addProduct);
productRouter.get('/product/:id', getProductById);
productRouter.patch('/product/:id', editProduct);
productRouter.delete('/product/:id', deleteProduct);

export default productRouter;
