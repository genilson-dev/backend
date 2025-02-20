// import { Request, Response } from "express";

// import { PasswordRecoveryService } from "../services/services/PasswordRecoveryService";
// class PasswordRecoveryController {
//     async sendRecoveryEmail(req: Request, res: Response) {
//         const { email } = req.body;
//         const passwordRecoveryService = new PasswordRecoveryService();

//         try {
//             const response = await passwordRecoveryService.sendRecoveryEmail(email);
//             res.json(response);
//         } catch (error) {
//             res.status(400).json({ error: error.message });
//         }
//     }

//     async resetPassword(req: Request, res: Response) {
//         const { token, newPassword } = req.body;
//         const passwordRecoveryService = new PasswordRecoveryService();

//         try {
//             const response = await passwordRecoveryService.resetPassword(token, newPassword);
//             res.json(response);
//         } catch (error) {
//             res.status(400).json({ error: error.message });
//         }
//     }
// }

// export { PasswordRecoveryController };
