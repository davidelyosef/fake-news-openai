import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path, { dirname } from "path";
import openaiRoutes from "./routes/openaiRoutes.js";
import { PORT } from "./config/index.js";

config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: false }));

app.use('/openai', openaiRoutes);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
