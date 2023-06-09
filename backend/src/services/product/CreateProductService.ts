import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    banner,
    category_id,
    description,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        banner,
        category_id,
        description,
      },
    });
    return product;
  }
}

export { CreateProductService };
