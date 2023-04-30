// src/index.ts
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { port } from "./config";

import astronautsRoutes from "./routes/astronauts.routes";
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use("/astronauts", astronautsRoutes);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
