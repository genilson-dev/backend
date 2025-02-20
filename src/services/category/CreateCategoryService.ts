import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (!name || name.length < 2) {
            throw new Error("O nome da categoria deve ter pelo menos dois caracteres");
        }

        try {
            const category = await prismaClient.category.create({
                data: {
                    name: name,
                },
                select: {
                    id: true,
                    name: true,
                    created_at: true,                    
                    updated_at: true // Corrigi o nome do campo de update_at para updated_at
                    
                },
            });

            return category;
        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            throw new Error("Erro ao criar categoria");
        }
    }
}

export { CreateCategoryService };
