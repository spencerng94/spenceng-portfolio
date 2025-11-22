import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI | null => {
  if (!aiClient && process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamChatResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  const client = getClient();
  
  if (!client) {
    // Fallback mock for when API key is missing in demo
    return {
      async *[Symbol.asyncIterator]() {
         yield { text: "I'm currently in demo mode (no API Key configured). However, I can tell you that Spencer is an expert in React, AWS, and Node.js!" };
      }
    };
  }

  const chat = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history,
  });

  return chat.sendMessageStream({ message: userMessage });
};