import { app } from "./app.js";
import productsRouter from "./routes/products";

app.use("/api/products", productsRouter);


const PORT = 3000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));

