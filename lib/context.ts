import { documents } from '@/db/schema';
import { getEmbeddings } from './embeddings';
import { ContentEmbedding } from '@google/genai'
import { db } from '@/db';
import { sql } from 'drizzle-orm';

export async function getContext(query: string, chatId: number) {
  const queryEmbedding = await getEmbeddings(query);
  
  const result = await db.execute(
    sql`
      SELECT content, 1 - (embedding <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
      FROM ${documents}
      WHERE chat_id = ${chatId}
      ORDER BY similarity DESC
      LIMIT 5
    `
  );

  const matches = result.rows as any[];
  
  return matches.map((match) => match.content).join('\n\n');
}