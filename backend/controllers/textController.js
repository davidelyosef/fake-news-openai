import OpenAI from "openai";
import { config } from "dotenv";
config();

const openai = new OpenAI();

export const generateText = async (req, res) => {
  const { prompt } = req.body;
  let gptResponse = [];

  openai.chat.completions.create
  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
    gptResponse.push(chunk.choices[0]?.delta?.content);
  }

  res.send(gptResponse.join("") || "");
}