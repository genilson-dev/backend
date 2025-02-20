import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ name, table }: OrderRequest) {
        if (!name || !table) {
            throw new Error("Name and table number are required");
        }

        try {
            const orderService = await prismaClient.order.create({
                data: {
                    table: table,
                    name: name,
                },
                select: {
                    id: true,
                    name: true,
                    table: true,
                    draft: true,
                    status: true,
                },
            });

            return orderService;
        } catch (error) {
            console.error("Erro ao criar pedido:", error);
            throw new Error("Erro ao criar pedido");
        }
    }
}

export { CreateOrderService };
