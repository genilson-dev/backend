import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        if (!name || name.length < 2) {
            res.status(400).json({ error: "O nome da categoria deve ter pelo menos dois caracteres" });
        }

        try {
            const createCategoryService = new CreateCategoryService();
            const category = await createCategoryService.execute({ name });
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { CreateCategoryController };
