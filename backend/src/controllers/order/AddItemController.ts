import { Request, Response } from "express";
<<<<<<< HEAD
=======

>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
<<<<<<< HEAD

    const {amount, order_id, product_id} = req.body;

    const addItem = new AddItemService();

    const order =await addItem.execute({amount, order_id, product_id})
=======
    const addItem = new AddItemService();

    const { order_id, product_id, amount } = req.body;

    const order = await addItem.execute({
      order_id,
      product_id,
      amount,
    });
>>>>>>> 99f78cae26156a7ebdced74d962184e616f3ab18
    return res.json(order)
  }
}

export { AddItemController };
