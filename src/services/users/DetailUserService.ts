import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        try {
            const user = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                },
                // Escolhendo o que deve ser mostrado para o usuario
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: false,
                    created_at: false,
                    updated_at: true
                },
            });

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw new Error("Erro ao buscar usuário");
        }
    }
}

export { DetailUserService };
