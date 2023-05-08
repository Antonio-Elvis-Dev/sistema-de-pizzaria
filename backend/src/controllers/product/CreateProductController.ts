import { Response, Request } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, category_id, description } = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
<<<<<<< HEAD
      const { originalname, filename: banner } = req.file;
      
=======
      
      const { originalname, filename: banner } = req.file;

>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
      const product = await createProductService.execute({
        name,
        price,
        banner,
        category_id,
        description,
      });
<<<<<<< HEAD
      
=======

>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
      return res.json(product);
    }
  }
}

export { CreateProductController };
