import { Router } from "express";

import multer  from 'multer'

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetaillUserController } from "./controllers/users/DetaillUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp")) //pode ser passado como um middleware
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

router.post("/product", isAuthenticated,upload.single('file'), new CreateProductController().handle);

export { router };
