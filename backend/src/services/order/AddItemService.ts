import prismaClient from "../../prisma";

<<<<<<< HEAD
interface ItemRequest{
 amount:number,
 order_id:string,
 product_id:string
}

class AddItemService{
 async execute({amount,order_id,product_id}:ItemRequest){

    const order = await prismaClient.item.create({
        data:{
            amount,
            order_id:order_id,
            product_id:product_id
        }
    })

    return order
 }   
}

export {AddItemService}
=======
interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });
    return order;
  }
}

export { AddItemService };
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
