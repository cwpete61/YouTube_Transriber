/**
 * Search API Endpoint
 * Demonstrates how frontend would interact with the retrieval engine
 */

import { RetrievalEngine } from "./index";

export class SearchApi {
  
  /**
   * Search endpoint
   */
  static async search(query: string, filters: any = {}, sortBy: string = "relevance", limit: number = 20) {
    console.log("🌐 Search API called");
    
    try {
      // Validate inputs
      if (!query || typeof query !== 'string') {
        throw new Error('Query parameter is required and must be a string');
      }
      
      // Perform search with ranking
      const results = await RetrievalEngine.searchWithRanking(query, filters);
      
      // Apply sorting if needed
      let sortedResults = [...results];
      switch (sortBy) {
        case 'newest':
          sortedResults.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'oldest':
          sortedResults.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          break;
        case 'alphabetical':
          sortedResults.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'relevance':
        default:
          // Already sorted by relevance from searchWithRanking
          break;
      }
      
      // Apply limit
      const finalResults = sortedResults.slice(0, limit);
      
      return {
        query,
        filters,
        sortBy,
        totalCount: finalResults.length,
        results: finalResults,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error("Search API error:", error);
      throw new Error(`Search failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  /**
   * Get related records for a specific record
   */
  static async getRelatedRecords(recordId: string, limit: number = 10) {
    console.log(`🌐 Getting related records for: ${recordId}`);
    
    try {
      const related = await RetrievalEngine.getRelatedRecords(recordId, limit);
      
      return {
        recordId,
        relatedCount: related.length,
        relatedRecords: related,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error("Related records API error:", error);
      throw new Error(`Failed to get related records: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  /**
   * Get records by tag
   */
  static async getRecordsByTag(tag: string, limit: number = 20) {
    console.log(`🌐 Getting records by tag: ${tag}`);
    
    try {
      const records = await RetrievalEngine.getRecordsByTag(tag, limit);
      
      return {
        tag,
        count: records.length,
        records,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error("Tag search API error:", error);
      throw new Error(`Failed to get records by tag: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  /**
   * Get sorted records
   */
  static async getSortedRecords(sortBy: string = "newest", limit: number = 20) {
    console.log(`🌐 Getting sorted records by: ${sortBy}`);
    
    try {
      const records = await RetrievalEngine.getSortedRecords(sortBy, limit);
      
      return {
        sortBy,
        count: records.length,
        records,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error("Sorted records API error:", error);
      throw new Error(`Failed to get sorted records: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

// Example usage
async function testSearchApi() {
  console.log("🧪 Testing Search API");
  
  try {
    // Test basic search
    console.log("\n1. Testing basic search...");
    const searchResults = await SearchApi.search("machine learning", {}, "relevance", 5);
    console.log("✓ Search successful");
    console.log("  Results:", searchResults.totalCount);
    
    // Test search with filters
    console.log("\n2. Testing filtered search...");
    const filteredResults = await SearchApi.search("AI", { sourceType: "YOUTUBE" }, "newest", 3);
    console.log("✓ Filtered search successful");
    console.log("  Results:", filteredResults.totalCount);
    
    // Test related records
    console.log("\n3. Testing related records...");
    const relatedResults = await SearchApi.getRelatedRecords("1", 5);
    console.log("✓ Related records search successful");
    console.log("  Related count:", relatedResults.relatedCount);
    
    // Test tag search
    console.log("\n4. Testing tag search...");
    const tagResults = await SearchApi.getRecordsByTag("AI", 5);
    console.log("✓ Tag search successful");
    console.log("  Records found:", tagResults.count);
    
    // Test sorted records
    console.log("\n5. Testing sorted records...");
    const sortedResults = await SearchApi.getSortedRecords("alphabetical", 5);
    console.log("✓ Sorted records search successful");
    console.log("  Records found:", sortedResults.count);
    
    console.log("\n🎉 All Search API tests passed!");
    console.log("\n📋 Search API Features Implemented:");
    console.log("✅ Hybrid Semantic + Keyword Search");
    console.log("✅ Advanced Ranking Algorithm");
    console.log("✅ Filtering by Source Type, Date, Tags");
    console.log("✅ Sorting Options");
    console.log("✅ Related Records Discovery");
    console.log("✅ Tag-based Searching");
    console.log("✅ Sorted Results");
    
  } catch (error) {
    console.error("❌ Search API test failed:", error);
  }
}

// Uncomment to run test
// testSearchApi();