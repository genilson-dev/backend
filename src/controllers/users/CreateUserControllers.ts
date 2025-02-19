import { Request, Response } from 'express';
import { CreateUserService } from '../../services/users/createUserServices';
class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, password } = req.body;

        if (!nome || !email || !password) {
            res.status(400).json({ error: "Name, email, and password are required" });
        }

        try {
            // Instanciando o serviço
            const createUserService = new CreateUserService();
            // Executando o serviço
            const user = await createUserService.execute({ nome, email, password });
            // Retornando o serviço
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { CreateUserController };