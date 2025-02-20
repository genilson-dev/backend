import prismaClient from "../../prisma";

class ListOrderService {
    async execute() {
        try {
            // Listando todas as ordens que estão cadastradas no banco de dados
            const orders = await prismaClient.order.findMany({
                // Escolhendo quais das opções das ordens encontradas serão mostradas
                where: {
                    draft: true,
                    status: false,
                },
                orderBy: {
                    created_at: "desc",
                },
                select: {
                    id: true,
                    name: true,
                    created_at: true,
                    // Adicione outros campos que deseja retornar
                },
            });

            if (orders.length === 0) {
                throw new Error("No orders found");
            }

            return orders;
        } catch (error) {
            console.error("Erro ao listar ordens:", error);
            throw new Error("Erro ao listar ordens");
        }
    }
}

export { ListOrderService };
