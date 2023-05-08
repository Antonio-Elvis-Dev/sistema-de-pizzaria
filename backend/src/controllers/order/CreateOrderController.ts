<<<<<<< HEAD
import { CreateOrderService } from "../../services/order/CreateOrderService";
import { Request, Response } from "express";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { name, table } = req.body;
=======
import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({
      name,
      table,
    });
<<<<<<< HEAD
    return res.json(order);
=======
    return res.json(order) // retorna para o usuário
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
  }
}

export { CreateOrderController };
