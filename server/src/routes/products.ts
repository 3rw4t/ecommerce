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

// GET /api/products/:id -> producto por id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { product_id: Number(id) }, // 👈 asegurate que "id" en tu schema sea INT
    });

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener producto" });
  }
});

export default router;
