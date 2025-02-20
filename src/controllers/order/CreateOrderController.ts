import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;

        if (!table || !name) {
           res.status(400).json({ error: "Table and name are required" });
        }

        try {
            const createOrder = new CreateOrderService();
            const order = await createOrder.execute({ table, name });
           res.json(order);
        } catch (error) {
           res.status(500).json({ error: error.message });
        }
    }
}

export { CreateOrderController };
