import express from 'express';
import { ProductService } from './product.service.js';
import { catchAsyncError } from './../../middleware/catchAsyncError.js';
import { validation } from './../../utlis/validation.js';
import { addProductSchema, updateProductSchema } from './product.validation.js';
const productRouter = express.Router();

// add
productRouter.post('/product', validation(addProductSchema), catchAsyncError(ProductService.addProduct));
//update
productRouter.put('/product/:id', validation(updateProductSchema), catchAsyncError(ProductService.updateProduct));
//delete
productRouter.delete('/product/:id', catchAsyncError(ProductService.deleteProduct));
//getOne
productRouter.get('/product/:id', catchAsyncError(ProductService.getProduct));
//getAll
productRouter.get('/product', catchAsyncError(ProductService.getAllProducts));

export default productRouter;
