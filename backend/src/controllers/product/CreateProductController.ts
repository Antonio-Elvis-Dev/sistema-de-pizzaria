import { Response, Request } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, banner, category_id, description } = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { originalname, filename } = req.file;

      console.log(filename);
    }

    const product = await createProductService.execute({
      name,
      price,
      banner:'',
      category_id,
      description,
    });

    return res.json(product);
  }
}

export { CreateProductController };
