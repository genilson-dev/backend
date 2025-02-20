import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        // const order_id = req.body;

        if (!order_id) {
            res.status(400).json({ error: "Order ID is required" });
        }

        const removeOrder = new RemoveOrderService();

        try {
            const order = await removeOrder.execute({ order_id });
            res.json(order);
        } catch (error) {
            console.error("Erro ao remover pedido:", error);
            res.status(500).json({ error: "Erro ao remover pedido" });
        }
    }
}

export { RemoveOrderController };
