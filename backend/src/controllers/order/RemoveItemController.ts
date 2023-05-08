import { Request, Response } from "express";

import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const { item_id } = req.body;

    const removeItem = new RemoveItemService();

    const item = removeItem.execute({
      item_id,
    });

    return res.json(item)
  }
}

export {RemoveItemController}
