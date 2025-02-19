// services/CreateUserService.ts
import prismaDB from "../../prisma";
import { UserRequest } from "../../interfaces";
import { hash } from "bcryptjs";

class CreateUserService {
    async execute({ nome, email, password }: UserRequest) {
        // Verificando se o email existe
        if (!email) {
            throw new Error("Email incorreto ou não existe");
        }

        // Verificar se o email já consta no banco de dados
        const userAlreadyExists = await prismaDB.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaDB.user.create({
            data: {
                name: nome,
                email: email,
                password: passwordHash,
            },
            // Escolhendo o que vai ser retornado para o usuário quando ele for cadastrado
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
            },
        });

        return user;
    }
}

export { CreateUserService };
