import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: ProductRequest) {
        if (!category_id) {
            throw new Error("Category ID is required");
        }

        try {
            // Listando todas as categorias que estão cadastradas no banco de dados
            const findByCategory = await prismaClient.product.findMany({
                // Escolhendo quais das opções das categorias encontradas serão mostradas
                where: {
                    category_id: category_id,
                },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    // Adicione outros campos que deseja retornar
                },
            });

            if (findByCategory.length === 0) {
                throw new Error("No products found for this category");
            }

            return findByCategory;
        } catch (error) {
            console.error("Erro ao listar produtos por categoria:", error);
            throw new Error("Erro ao listar produtos por categoria");
        }
    }
}

export { ListByCategoryService };

