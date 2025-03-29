import express from 'express';
import { addProduct, listProducts, singleProduct, removeProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js'; // Correct import
import adminAuth from '../middlewares/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}]), addProduct);

productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts);

export default productRouter;
