import express from "express";
import { getImoveis } from "../controllers/imoveis.js";

const router = express.Router();

router.get("/imoveis", getImoveis);

export default router;
