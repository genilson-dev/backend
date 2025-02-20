import { Request, Response } from "express";
import { ListAllUserService } from "../../services/users/ListAllUserService";

class ListAllUserController{
    async handle(req:Request, res: Response){
        // const {name} = req.body;
        const listUser = new ListAllUserService();
        const user = await listUser.execute()
        res.json(user)
    }
}
export {ListAllUserController}
