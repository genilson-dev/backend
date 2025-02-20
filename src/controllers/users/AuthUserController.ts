import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
        }

        try {
            const authUserService = new AuthUserService();
            const auth = await authUserService.execute({ email, password });
            res.json({auth});
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

export { AuthUserController };
