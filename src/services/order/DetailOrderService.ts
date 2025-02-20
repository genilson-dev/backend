import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: DetailRequest) {
        if (!order_id) {
            throw new Error("Order ID is required");
        }

        try {
            const detailOrder = await prismaClient.item.findMany({
                where: {
                    order_id: order_id,
                },
                // Incluindo na lista de retornos os itens de outras tabelas que o banco tem relação
                include: {
                    product: true,
                    order: true,
                },
                orderBy: {
                    created_at: "asc",
                },
            });

            if (detailOrder.length === 0) {
                throw new Error("No items found for this order");
            }

            return detailOrder;
        } catch (error) {
            console.error("Erro ao buscar detalhes do pedido:", error);
            throw new Error("Erro ao buscar detalhes do pedido");
        }
    }
}

export { DetailOrderService };
