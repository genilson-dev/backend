import { Request, Response } from "express";
// import { RemoveOrderService } from "../../services/order/RemoveOrderService";
import { SendOrderService } from "../../services/order/SendOrderService";
class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        if (!order_id) {
           res.status(400).json({ error: "Order ID is required" });
        }

        const sendOrder = new SendOrderService();

        try {
            const send = await sendOrder.execute({ order_id });
           res.json(send);
        } catch (error) {
            console.error("Erro ao enviar pedido:", error);
           res.status(500).json({ error: "Erro ao enviar pedido" });
        }
    }
}

export { SendOrderController };
