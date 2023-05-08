import { DeleteOrderService } from "../../services/order/DeleteOrderService";
import { Request, Response } from "express";


class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const deleteOrder = new DeleteOrderService();

    const order = deleteOrder.execute({
      order_id,
    });

    return res.json(order);
  }
}

export {DeleteOrderController}