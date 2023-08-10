import express from 'express';
import { CategoryService } from './category.service.js';
import { catchAsyncError } from '../../middleware/catchAsyncError.js';
import { validation } from '../../utlis/validation.js';
import { addCategorySchema, updateCategorySchema } from './category.validation.js';
const categoryRouter = express.Router();

// add
categoryRouter.post('/category', validation(addCategorySchema), catchAsyncError(CategoryService.addCategory));
//update
categoryRouter.put('/category/:id', validation(updateCategorySchema), catchAsyncError(CategoryService.updateCategory));
//delete
categoryRouter.delete('/category/:id', catchAsyncError(CategoryService.deleteCategory));
//getOne
categoryRouter.get('/category/:id', catchAsyncError(CategoryService.getCategory));
//getAll
categoryRouter.get('/category', catchAsyncError(CategoryService.getAllCategories));

export default categoryRouter;