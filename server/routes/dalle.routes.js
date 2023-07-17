import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

// does not run, because the openAi services are not available in my country
// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openAi = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E routes!" });
});

// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openAi.createImage({
//       prompt,
//       n: 1,
//       size: "1024*1024",
//       response_format: "b64_json",
//     });

//     const image = response.data.data[0].b64_json;

//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// });

export default router;
