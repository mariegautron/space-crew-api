import http from "http";
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { port } from "./config";

import astronautsRoutes from "./routes/astronauts.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
