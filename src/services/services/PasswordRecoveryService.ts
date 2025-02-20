// import prismaClient from "../../prisma";
// import { hash } from "bcryptjs";
// import { v4 as uuidv4 } from "uuid";
// import nodemailer from "nodemailer";

// class PasswordRecoveryService {
//     async sendRecoveryEmail(email: string) {
//         const user = await prismaClient.user.findFirst({
//             where: { email: email },
//         });

//         if (!user) {
//             throw new Error("Email não encontrado");
//         }

//         const token = uuidv4();

//         await prismaClient.passwordRecovery.create({
//             data: {
//                 userId: user.id,
//                 token: token,
//                 expiresAt: new Date(Date.now() + 3600000), // 1 hora de validade
//             },
//         });

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Recuperação de Senha",
//             text: `Você solicitou a recuperação de senha. Use o seguinte token para redefinir sua senha: ${token}`,
//         });

//         return { message: "Email de recuperação enviado" };
//     }

//     async resetPassword(token: string, newPassword: string) {
//         const recovery = await prismaClient.passwordRecovery.findFirst({
//             where: {
//                 token: token,
//                 expiresAt: { gt: new Date() },
//             },
//         });

//         if (!recovery) {
//             throw new Error("Token inválido ou expirado");
//         }

//         const passwordHash = await hash(newPassword, 8);

//         await prismaClient.user.update({
//             where: { id: recovery.userId },
//             data: { password: passwordHash },
//         });

//         await prismaClient.passwordRecovery.delete({
//             where: { id: recovery.id },
//         });

//         return { message: "Senha redefinida com sucesso" };
//     }
// }

// export { PasswordRecoveryService };
