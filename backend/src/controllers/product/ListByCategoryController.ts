<<<<<<< HEAD
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

import { Request, Response } from "express";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listByCategory = new ListByCategoryService();
    const product = await listByCategory.execute({
      category_id,
    });
    return res.json(product);
=======
import { Request, Response } from "express";

import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listByCategory = new ListByCategoryService();

    const products = await listByCategory.execute({
      category_id,
    });

    return res.json(products);
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
  }
}

export { ListByCategoryController };
