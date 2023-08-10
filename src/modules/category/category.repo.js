
import { ApiFeatures } from '../../utlis/ApiFeatures.js';
import { categoryModel } from './../../../database/models/category.model.js';

export class CategoryRepo {
    static async addCategory(categoryBody) {
        const category = await categoryModel.create(categoryBody);
        return category;
    }

    static async updateCategory(id, updateBody) {
        const category = await categoryModel.findByIdAndUpdate(id, updateBody);
        return category;
    }
    static async deleteCategory(id) {
        const category = await categoryModel.findByIdAndDelete(id);
        return category;
    }

    static async findAllCategories(queryString) {
        // build query
        let apiFeatures = new ApiFeatures(categoryModel.find(), queryString)
            .paginate().fields().sort().search().filter();
        // execute query
        let result = await apiFeatures.mongooseQuery;
        return result;
    }
    static async findCategory(id) {
        const category = await categoryModel.findById(id);
        return category;
    }
};