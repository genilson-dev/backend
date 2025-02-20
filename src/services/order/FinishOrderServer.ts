import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: OrderRequest) {
        if (!order_id) {
            throw new Error("Order ID is required");
        }

        try {
            const order = await prismaClient.order.update({
                // Identificando o que vai ser alterado
                where: { id: order_id },
                // Fazendo a alteração
                data: { status: true },
                select: {
                    id: true,
                    name: true,
                    status: true,
                    draft: true
                }
            });
            return order;
        } catch (error) {
            console.error("Erro ao atualizar pedido:", error);
            throw new Error("Erro ao atualizar pedido");
        }
    }
}

export { FinishOrderService };



