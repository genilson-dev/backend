import { Router } from "express";
import multer from "multer";
import uploadConfig from './../config/multer';
import { CreateUserController } from "../controllers/users/CreateUserControllers";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))
router.post("/user/create", new CreateUserController().handle)

export { router }; 