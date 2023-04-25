import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({name, price,banner,category_id,description}:ProductRequest) {

    return { ok: true };


  }
}

export { CreateProductService };
