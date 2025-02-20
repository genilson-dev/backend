import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderServer";

class ListOrderController {
    async handle(req: Request, res: Response) {
        try {
            const listOrderService = new ListOrderService();
            const orders = await listOrderService.execute();
           res.json(orders);
        } catch (error) {
           res.status(500).json({ error: error.message });
        }
    }
}

export { ListOrderController };

