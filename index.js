import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./src/Routes/userRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api", userRouter);
app.listen(port, () => {
  console.log(`app is lestening on server${port}`);
});

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log("connecting to database has failed", error);
  });
