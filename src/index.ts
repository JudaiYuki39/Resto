// import express from 'express'
// import cors from 'cors'

// const PORT: number = 8000
// const app = express()
// app.use(cors())

// app.listen(PORT, () => {

// })
import express from "express";
import cors from "cors";
import MenuRoutes from "./routes/menuRoutes";

const PORT: number = 8000;
const app = express();
app.use(cors());

app.use("/menu", MenuRoutes);

app.listen(PORT, () => {
  console.log(`[server]: server is running at http:localhost:${PORT}`);
});
