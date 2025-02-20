
import prismaClient from "../../prisma";

class ListAllProductService {
    async execute() {
        try {
            // Listando todas as categorias que estão cadastradas no banco de dados
            const product = await prismaClient.product.findMany({
                // Escolhendo quais das opções das categorias encontradas serão mostradas
                select: {
                    id: true,
                    name: true,
                },
            });

            if (product.length === 0) {
                throw new Error("No categories found");
            }

            return product;
        } catch (error) {
            console.error("Erro ao listar product:", error);
            throw new Error("Erro ao listar product");
        }
    }
}

export {ListAllProductService}
