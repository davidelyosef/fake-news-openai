import axios from 'axios';
import { config } from "dotenv";
config();

export const generateImage = async (req, res) => {
  const { prompt } = req.body;

  const imageSize = '512x512';

  try {
    const response = await axios.post('https://api.openai.com/v1/images/generations', {
      prompt: prompt,
      n: 1,
      size: imageSize,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json(imageUrl);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};
