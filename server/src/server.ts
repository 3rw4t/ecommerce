import { app } from "./app.js";
import { PrismaClient } from './generated/prisma'
const prisma = new PrismaClient()

const PORT = 3000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));

async function main() {
    try {
        const newProduct = await prisma.products.create({
            data: {
            name: 'Remera',
            description: 'Talle XL, Color Blanco', 
            price: 99.9,
            stock: 1000,
            }})
        console.log(newProduct)
    } catch (error) {
        console.log(error)
    }
}

main()
    .then( async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })