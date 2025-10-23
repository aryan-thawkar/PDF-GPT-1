import { NextRequest, NextResponse } from 'next/server'
import { loadS3IntoVectorDB } from '@/lib/vectors'
import { db } from '@/db'
import { chats } from '@/db/schema'
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'

const postBodySchema = z.object({
  fileKey: z.string(),
})

export async function POST(request: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const postBody = await request.json()
    const validation = postBodySchema.safeParse(postBody)

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }
    
    const { fileKey } = validation.data

    const cleanFileKey = fileKey.replace('uploads/', '')
    const endpoint = process.env.NEXT_PUBLIC_OCI_ENDPOINT!
    const bucketName = process.env.NEXT_PUBLIC_OCI_BUCKET_NAME!
    const pdfUrl = `${endpoint}/${bucketName}/${cleanFileKey}`;
    
    const returns = await db
      .insert(chats)
      .values({
        fileKey: fileKey,
        pdfName: fileKey,
        pdfUrl: pdfUrl,
        userId: userId,
      })
      .returning({
        insertedId: chats.id,
      })
      
    await loadS3IntoVectorDB(fileKey, returns[0].insertedId)

    return NextResponse.json({ error: false, chatId: returns[0].insertedId })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}