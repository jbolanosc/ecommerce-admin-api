import app from "./app";
import { Application } from "express";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

function startApp(app: Application) {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
}

startApp(app);
