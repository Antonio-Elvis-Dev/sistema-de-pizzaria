import { Router } from "express";

import multer from "multer";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetaillUserController } from "./controllers/users/DetaillUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
<<<<<<< HEAD
import { DeleteOrderService } from "./services/order/DeleteOrderService";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
=======
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18

const router = Router();

const upload = multer(uploadConfig.upload("./tmp")); //pode ser passado como um middleware
// ROTAS DE USUARIO
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetaillUserController().handle); //passando middleware na rota

// ROTAS DE CATEGORY
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
); // passando o middleware pq so logados podem criar categorias
router.get("/category", isAuthenticated, new ListCategoryController().handle);

// ROTAS PRODUCT

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
<<<<<<< HEAD

=======
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);
<<<<<<< HEAD

// ROTAS ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new DeleteOrderController().handle);

router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.post("/order/remove", isAuthenticated, new RemoveItemController().handle);
=======
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18

// ROTA DE ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
export { router };
