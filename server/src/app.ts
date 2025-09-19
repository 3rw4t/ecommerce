import express from "express";
import cors from 'cors'
import type { CorsOptions } from 'cors'
import type { Request, Response } from "express";

const app = express();

const corsOptions: CorsOptions = {
    origin: function (origin, callback){
        if (origin === process.env.FRONTEND_URL){
            callback(null, true)
        } else {
            callback(new Error ('Error de CORS'))
        }
    }
}
app.use(cors(corsOptions))
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => res.json({ ok: false
 }));

export { app };