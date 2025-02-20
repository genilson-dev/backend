import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        if (!item_id) {
            res.status(400).json({ error: "Item ID is required" });
        }

        try {
            const removeItem = new RemoveItemService();
            const item = await removeItem.execute({ item_id });
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { RemoveItemController };
