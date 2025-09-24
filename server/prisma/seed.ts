import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
    await prisma.Product.createMany({
        data: [
            {
            name: "White Shirt",
            description: "Size M, Full White",
            price: 59.99,
            stock: 100,
            sale_percentage: 0.00,},
            {
            name: "Red Shirt",
            description: "Size M, Full Red",
            price: 59.99,
            stock: 100,
            sale_percentage: 0.00,},
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });