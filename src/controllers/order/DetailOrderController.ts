import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        if (!order_id) {
           res.status(400).json({ error: "Order ID is required" });
        }

        try {
            const orderDetail = new DetailOrderService();
            const order = await orderDetail.execute({ order_id });
           res.json({ order });
        } catch (error) {
           res.status(500).json({ error: error.message });
        }
    }
}

export { DetailOrderController };
