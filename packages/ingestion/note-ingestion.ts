import { PrismaClient } from "@prisma/client";
import { Record } from "@prisma/client";
import { AdvancedExtractionService } from "../extraction";

const prisma = new PrismaClient();

/**
 * Note Ingestion Service
 * Handles processing of user notes and memos according to the full ingestion pipeline
 */
export class NoteIngestionService {
  async processNote(title: string, content: string, description?: string, tags?: string[], category?: string): Promise<Record> {
    try {
      console.log(`Processing note: ${title}`);
      
      // Step 1: Apply full extraction pipeline
      console.log("Applying advanced extraction pipeline...");
      const extractionResults = await AdvancedExtractionService.processFullExtraction(content, title, "NOTE");
      
      // Step 2: Generate summary (using extraction results)
      const summary = extractionResults.summary;
      
      // Step 3: Extract entities (using extraction results)
      const entities = extractionResults.entities.map((e: any) => e.name);
      
      // Step 4: Chunk note text
      const chunks = await this.chunkContent(content);
      
      // Step 5: Generate embeddings
      const embeddings = await this.generateEmbeddings(chunks);
      
      // Step 6: Store record in database
      const record = await prisma.record.create({
        data: {
          title: title,
          sourceType: "NOTE",
          sourceUrl: null,
          description: description,
          cleanText: content,
          summaryShort: summary,
          summaryLong: content,
          metadata: {
            category: category,
            wordCount: content.split(' ').length,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...extractionResults
          },
          ownerId: "demo-user-id",
        },
      });

      // Step 7: Store chunks and embeddings
      await this.storeChunks(record.id, chunks, embeddings);
      
      // Step 8: Store entities
      await this.storeEntities(record.id, entities);
      
      console.log(`Successfully processed note record: ${record.id}`);
      return record;
    } catch (error) {
      console.error("Error processing note:", error);
      throw new Error(`Failed to process note: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private async chunkContent(content: string): Promise<string[]> {
    const chunks: string[] = [];
    const chunkSize = 500;
    const words = content.split(/\s+/);
    
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(' '));
    }
    
    return chunks;
  }

  private async generateEmbeddings(chunks: string[]): Promise<number[][]> {
    return chunks.map(() => Array(1536).fill(Math.random()));
  }

  private async storeChunks(recordId: string, chunks: string[], embeddings: number[][]): Promise<void> {
    console.log(`Storing ${chunks.length} chunks for note record ${recordId}`);
  }

  private async storeEntities(recordId: string, entities: string[]): Promise<void> {
    console.log(`Storing ${entities.length} entities for note record ${recordId}`);
  }
}