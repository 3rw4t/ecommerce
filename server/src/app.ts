import express from "express";
import cors from 'cors'
import type { CorsOptions } from 'cors'
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions: CorsOptions = {
    origin: function (origin, callback){
        console.log(origin)
        if (!origin || origin === process.env.FRONTEND_URL){
            callback(null, true)
        } else {
            callback(new Error ('Error de CORS'))
        }
    }
}
app.use(cors(corsOptions))
app.use(express.json());

// Test route
app.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: "Yep, it works" });
});
app.get("/api/health", (req: Request, res: Response) => res.json({ ok: false}));

// Products routes
import productsRouter from "./modules/products/routes.js";
app.use("/api/products", productsRouter);

export { app };