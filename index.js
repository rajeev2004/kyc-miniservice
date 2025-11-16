import express from "express";
import cors from "cors";
import panRoutes from "./src/routes/pan.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/kyc/pan", panRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
