import { Request, Response } from "express";

import { ListFinishOrderService } from "../../services/order/ListFinishOrderServer";
class ListFinishOrderController {
    async handle(req: Request, res: Response) {
        try {
            const listOrderService = new ListFinishOrderService();
            const orders = await listOrderService.execute();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { ListFinishOrderController };
