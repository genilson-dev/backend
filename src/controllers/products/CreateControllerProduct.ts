import { Request, Response } from "express";
import { CreateServiceProduct } from "../../services/products/CreateServiceProduct";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        if (!name || !price || !description || !category_id) {
            res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        if (!req.file) {
            res.status(400).json({ error: "Arquivo de upload é obrigatório" });
        }

        try {
            const { originalname, filename: banner } = req.file;

            // Instanciando o serviço
            const createProductService = new CreateServiceProduct();
            // Executando o serviço
            const product = await createProductService.execute({ name, price, description, banner, category_id });
            // Retornando o serviço
            res.json({ product });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { CreateProductController };
