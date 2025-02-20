import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

// Listando todas as categorias que estão cadastradas no banco de dados
class ListCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const listCategoryService = new ListCategoryService();
            const category = await listCategoryService.execute();
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { ListCategoryController };
