import { Request, Response } from "express";
import { ListAllProductService } from "../../services/products/ListAllProductService";

class ListAllProductController{
    async handle(req:Request, res: Response){
        // const {name} = req.body;
        const listProduct = new ListAllProductService();
        const product = await listProduct.execute()
        res.json(product)
    }
}
export {ListAllProductController}
