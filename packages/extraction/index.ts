export { AdvancedExtractionService } from './advanced-extraction';

/**
 * Extraction Service
 * Handles content processing like summarization, entity extraction, etc.
 */

// Import the advanced service for backward compatibility
import { AdvancedExtractionService } from './advanced-extraction';

// Re-export the basic methods for backward compatibility
export class ExtractionService {
  static async generateSummary(text: string): Promise<string> {
    return AdvancedExtractionService.generateSummary(text);
  }

  static async extractEntities(text: string): Promise<{name: string, type: string}[]> {
    return AdvancedExtractionService.extractEntities(text);
  }

  static async extractKeywords(text: string): Promise<string[]> {
    return AdvancedExtractionService.extractKeywords(text);
  }

  static async autoTag(text: string, title: string): Promise<string[]> {
    return AdvancedExtractionService.autoTag(text, title);
  }
}