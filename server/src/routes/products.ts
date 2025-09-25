import { Router } from "express";
import { PrismaClient } from "../../prisma/generated/index.js";

const router = Router();
const prisma = new PrismaClient();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

export default router;
