import { Router } from "express";
import multer from "multer";
import uploadConfig from './../config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))


export { router }; 