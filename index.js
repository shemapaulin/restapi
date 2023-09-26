import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", () => {
  console.log("it's startinggggg........");
});
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
