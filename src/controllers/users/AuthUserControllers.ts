import { Request, Response } from 'express';
import { AuthUserService } from '../../services/users/AuthUserServices';

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        // Verifica se os campos email e password estão presentes
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        try {
            const authUserService = new AuthUserService();
            const auth = await authUserService.execute({ email, password });

            // Envia a resposta de sucesso
            return res.json(auth);
        } catch (error) {
            // Envia a resposta de erro
            return res.status(401).json({ error: error.message });
        }
    }
}

export { AuthUserController };

