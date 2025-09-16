import express from "express";
import type { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => res.json({ ok: false
 }));

export { app };