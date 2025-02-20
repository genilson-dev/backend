import prismaClient from "../../prisma";

interface AddItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService {
    async execute({ order_id, product_id, amount }: AddItemRequest) {
        if (!order_id || !product_id || amount <= 0) {
            throw new Error("Order ID, Product ID, and a valid amount are required");
        }

        try {
            const item = await prismaClient.item.create({
                data: {
                    order_id: order_id,
                    product_id: product_id,
                    amount: amount,
                },
                select: {
                    id: true,
                    amount: true,
                    created_at: true,
                    updated_at: true
                },
            });

            return item;
        } catch (error) {
            console.error("Erro ao adicionar item:", error);
            throw new Error("Erro ao adicionar item");
        }
    }
}

export { AddItemService };
