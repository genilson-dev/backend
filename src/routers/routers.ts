import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from './controllers/users/CreateUserController'; // Corrigido o nome do arquivo
import { AuthUserController } from './controllers/users/AuthUserController';
import { DetailUserController } from './controllers/users/DetailUserController';
import { IsAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategorController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/products/CreateControllerProduct';
import uploadConfig from './config/multer';
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ListFinishOrderController } from './controllers/order/ListFinishOrderController';
import { ListAllUserController } from './controllers/users/ListAllUserController';
import { ListAllProductController } from './controllers/products/ListAllProductController';
// import { PasswordRecoveryController } from './controllers/PasswordRecoveryController';
const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', new CreateUserController().handle); // Removido o comentário incorreto
router.post('/login', new AuthUserController().handle)
router.get("/me", IsAuthenticated, new DetailUserController().handle) // Buscando informações do usuario/produto
router.get('/user/list', IsAuthenticated, new ListAllUserController().handle)

// Rotas de categorias
router.post('/category', IsAuthenticated, new CreateCategoryController().handle)
router.get('/liscategory', IsAuthenticated, new ListCategoryController().handle)


// Rotas de Products
router.post('/product', IsAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', IsAuthenticated, new ListByCategoryController().handle)
router.get('/list/product', IsAuthenticated, new ListAllProductController().handle)

// Rotas de Orders
router.post('/order', IsAuthenticated, new CreateOrderController().handle)
router.delete('/delete/order', IsAuthenticated, new RemoveOrderController().handle)

router.post('/add/order', IsAuthenticated, new AddItemController().handle)
router.delete('/remove/item', IsAuthenticated, new RemoveItemController().handle)

router.put('/update', IsAuthenticated, new SendOrderController().handle)

router.get('/orders', IsAuthenticated, new ListOrderController().handle)
router.get('/detail', IsAuthenticated, new DetailOrderController().handle)
router.put('/final', IsAuthenticated, new FinishOrderController().handle)
router.get('/final/order', IsAuthenticated, new ListFinishOrderController().handle)

//Recovery de password
// router.post('/recover-send-email', new PasswordRecoveryController().sendRecoveryEmail)
// router.post('/recover-send-password', new PasswordRecoveryController().resetPassword)
export { router }; 
