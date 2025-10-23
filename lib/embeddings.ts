import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function getEmbeddings(text: string) {
  try {
    const result = await genAI.models.embedContent({
      model: 'text-embedding-004',
      contents: [{ parts: [{ text: text.replace(/\n/g, ' ') }] }],
    });

//     // ✅ Correct property is 'embeddings[0].values'
//     return result.embeddings[0].values as number[];
//   } catch (error) {
//     console.error('Error generating embeddings:', error);
//     throw error;
//   }

    if (!result.embeddings || result.embeddings.length === 0) {
      throw new Error('No embeddings returned from API');
    }

    return result.embeddings[0].values as number[];
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
}
