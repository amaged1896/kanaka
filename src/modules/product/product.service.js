import { AppError } from '../../utlis/AppError.js';
import { ProductRepo } from './product.repo.js';

export class ProductService {
    static async addProduct(productBody) {
        const product = await ProductRepo.addProduct(productBody);
        if (!product) return next(new AppError("problem adding product", 400));
        return res.status(201).json({ message: "product added successfully" });
    }

    static async updateProduct(id, updateBody) {
        const product = await ProductRepo.updateProduct(id, updateBody);
        if (!product) return next(new AppError("problem adding product", 400));
        return res.status(201).json({ message: "product Updated successfully" });
    }

    static async deleteProduct(id) {
        const product = await ProductRepo.deleteProduct(id);
        if (!product) return next(new AppError("there are no product", 404));
        return res.status(200).json({ message: "product deleted successfully" });
    }

    static async getAllProducts() {
        const allProducts = await ProductRepo.getAllProducts(req.query);
        if (!allProducts) return next(new AppError("there are no products", 400));
        return res.status(203).json({ message: "success", result: allProducts });
    }

    static async getProduct(id) {
        const product = await productModel.getProduct(id);
        if (!product) return next(new AppError("there are no product", 400));
        return res.status(200).json({ message: "success", result: product });
    }
};