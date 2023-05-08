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
<<<<<<< HEAD
        category_id,
        description,
      },
    });
=======
        description,
        category_id,
      },
    });

>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
    return product;
  }
}

export { CreateProductService };
