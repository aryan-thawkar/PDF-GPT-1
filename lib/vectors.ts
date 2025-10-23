import { downloadFromS3AndParse } from './s3-server'
import { getEmbeddings } from './embeddings'
import { db } from '@/db'
import { documents } from '@/db/schema'

export async function loadS3IntoVectorDB(fileKey: string, chatId: number) {
  console.log('Downloading S3 object to file system...')
  const docs = await downloadFromS3AndParse(fileKey)
  console.log('PDF downloaded successfully!')

  // Split and prepare documents
  const chunks = docs.map((doc) => ({
    text: doc.pageContent,
    chatId,
  }))

  // Generate embeddings and insert into database
  for (const chunk of chunks) {
    const embedding = await getEmbeddings(chunk.text)
    
    await db.insert(documents).values({
      chatId: chunk.chatId,
      content: chunk.text,
      embedding: embedding,
    })
  }

  return docs
}