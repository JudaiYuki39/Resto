import express from "express";
import { getALLMenus } from "../controllers/menuController";

const app = express();
app.use(express.json());

app.get(`/`, getALLMenus);

export default app;
