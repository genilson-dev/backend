import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;

        if (!order_id || !product_id || amount <= 0) {
            res.status(400).json({ error: "Order ID, Product ID, and a valid amount are required" });
        }

        try {
            const addItemService = new AddItemService();
            const item = await addItemService.execute({ order_id, product_id, amount });
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { AddItemController };
