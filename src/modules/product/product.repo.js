import { ApiFeatures } from '../../utlis/ApiFeatures.js';
import { productModel } from './../../../database/models/product.model.js';

export class ProductRepo {
    static async addProduct(productBody) {
        const product = await productModel.create(productBody);
        return product;
    }

    static async updateProduct(id, updateBody) {
        const product = await productModel.findByIdAndUpdate(id, updateBody);
        return product;
    }

    static async deleteProduct(id) {
        const product = await productModel.findByIdAndDelete(id);
        return product;
    }

    static async getAllProducts(queryString) {
        // build query
        let apiFeatures = new ApiFeatures(productModel.find(), queryString)
            .paginate().fields().sort().search().filter();
        // execute query
        let result = await apiFeatures.mongooseQuery;
        return result;
    }

    static async getProduct(id) {
        const product = await productModel.findById(id);
        return product;
    }
};