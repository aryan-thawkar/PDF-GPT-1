import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function getEmbeddings(text: string) {
  try {
    const result = await genAI.models.embedContent({
      model: 'text-embedding-004',
      content: text.replace(/\n/g, ' '),
    });
    
    return result.values as number[];
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
}