import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    const order = await prismaClient.order.create({
<<<<<<< HEAD
      data: {
        table,
        name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
 
=======
        data:{
            table,
            name
        }
    })
    return order // retorna para o controller
  }
}
export { CreateOrderService };
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
