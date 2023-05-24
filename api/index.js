import express from "express";
import userRoutes from "./routes/users.js";
import imoveisRoutes from "./routes/imoveis.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/", userRoutes);
app.use("/imoveis", imoveisRoutes);

app.listen(8081);
