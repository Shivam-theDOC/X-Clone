import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/routes.js"; // Adjust the path as necessary
import postsRouter from "./src/routes/postsRoutes.js";

//intialize dotenv
dotenv.config();

//app initialization
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

//server initialization
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
