import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        // Verificando se o email existe
        if (!email) {
            throw new Error("Email incorreto ou não existe");
        }

        // Verificar se o email já consta no banco de dados
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
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
