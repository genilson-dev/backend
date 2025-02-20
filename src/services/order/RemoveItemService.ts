import prismaClient from "../../prisma";

interface ItemRequest {
    item_id: string;
}

class RemoveItemService {
    async execute({ item_id }: ItemRequest) {
        try {
            const order = await prismaClient.item.delete({
                where: {
                    id: item_id,
                },
            });
            return order;
        } catch (error) {
            console.error("Error removing item:", error);
            throw new Error("Failed to remove item");
        }
    }
}

export { RemoveItemService };


