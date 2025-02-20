import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        if (!category_id) {
            res.status(400).json({ error: "Category ID is required" });
        }

        try {
            const listByCategory = new ListByCategoryService();
            const product = await listByCategory.execute({ category_id });
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { ListByCategoryController };
