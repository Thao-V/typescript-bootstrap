import { Response, Request } from "express";
import product from "../model/ProductModel";

exports.getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await product.getAllProducts();
    res.send({ success: true, data: products });
  } catch (error) {
    res.send({ success: false, data: { message: "Server Error" } });
  }
};
