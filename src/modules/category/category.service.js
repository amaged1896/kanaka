import { CategoryRepo } from './category.repo.js';
import { AppError } from '../../utlis/AppError.js';

export class CategoryService {
    static async addCategory(req, res, next) {
        const category = await CategoryRepo.addCategory(req.body);
        if (!category) return next(new AppError("problem adding category", 400));
        return res.status(201).json({ message: "Category added successfully" });
    }

    static async updateCategory(req, res, next) {
        const category = await CategoryRepo.updateCategory(req.params.id, req.body);
        if (!category) return next(new AppError("problem update category", 400));
        return res.status(203).json({ message: "Category Updated successfully" });
    }

    static async deleteCategory(req, res, next) {
        const category = await CategoryRepo.deleteCategory(req.params.id);
        if (!category) return next(new AppError("there are no category", 404));
        return res.status(200).json({ message: "Category deleted successfully" });
    }

    static async getAllCategories(req, res, next) {
        const allCategories = await CategoryRepo.findAllCategories(req.query);
        if (!allCategories) return next(new AppError("there are no categories", 400));
        return res.status(203).json({ message: "success", result: allCategories });
    }

    static async getCategory(req, res, next) {
        const category = await CategoryRepo.findCategory(req.params.id);
        if (!category) return next(new AppError("there are no category", 400));
        return res.status(200).json({ message: "success", result: category });
    }
};