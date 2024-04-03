import { config } from "dotenv";
config();

export const { OPENAI_API_KEY, PORT } = process.env;