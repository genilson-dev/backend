import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        try {
            // Listando todas as categorias que estão cadastradas no banco de dados
            const category = await prismaClient.category.findMany({
                // Escolhendo quais das opções das categorias encontradas serão mostradas
                select: {
                    id: true,
                    name: true,
                },
            });

            if (category.length === 0) {
                throw new Error("No categories found");
            }

            return category;
        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            throw new Error("Erro ao listar categorias");
        }
    }
}

export { ListCategoryService };
