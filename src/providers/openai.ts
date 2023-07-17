import { ChatGPT } from "chatgpt-official";
import { Configuration, OpenAIApi } from "openai";

import config from "../config";

export const chatgpt = new ChatGPT(config.openAIAPIKey, {
	temperature: 0.7,
	max_tokens: config.maxModelTokens,
	top_p: 0.9,
	frequency_penalty: 0,
	presence_penalty: 0,
	model: "gpt-4",
});

export const openai = new OpenAIApi(
	new Configuration({
		apiKey: config.openAIAPIKey
	})
);
