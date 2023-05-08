import prismaClient from "../../prisma";

<<<<<<< HEAD

interface ProductRequest{
    category_id: string
}

class ListByCategoryService {
  async execute({category_id}:ProductRequest) {

const findByCategory = await prismaClient.product.findMany({
    where:{
        category_id
    }
})

=======
interface ProductRequest {
  category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: ProductRequest) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });
    return findByCategory;
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
  }
}

export { ListByCategoryService };
