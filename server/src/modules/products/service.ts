import { PrismaClient } from "../../../prisma/generated/index.js";
const prisma = new PrismaClient();
export const getAllProducts = () => {
    return prisma.product.findMany();
};

export const getProduct = (product_id: number) => {
    return prisma.product.findUnique({ where: { product_id } });
};

