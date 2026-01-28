
import express from "express";
import cors from "cors"
import connectDB from "./config/db.js";
import rootRouter from "./router/index.js";

export const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",

    ],
    credentials:true
  }),
);

app.use(express.json())

app.use("/api/v1",rootRouter)

connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});