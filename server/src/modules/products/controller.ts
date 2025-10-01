import type { Request, Response } from "express";
//import type le dice a TS que solo queremos los tipos, no importa nada en runtime.
//Esto funciona con ES Modules ("type": "module" en package.json).
import * as productService from "./service.js";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Error fetching products" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await productService.getProduct(Number(req.params.id));
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Error fetching product" });
    }
};
