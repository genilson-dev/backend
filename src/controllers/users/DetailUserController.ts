import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        if (!user_id) {
             res.status(400).json({ error: "User ID is required" });
        }

        try {
            // Instanciando o serviço
            const detailUserService = new DetailUserService();
            const user = await detailUserService.execute(user_id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { DetailUserController };
