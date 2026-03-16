import { UrlIngestionService } from "../../../packages/ingestion/url-ingestion";

// Simple test to verify the ingestion service works
async function testIngestion() {
  console.log("Testing URL Ingestion Service...");
  
  const service = new UrlIngestionService();
  
  try {
    const result = await service.processUrl(
      "https://example.com/article",
      "Example Article",
      "This is a sample article for testing purposes"
    );
    
    console.log("Successfully created record:", result.title);
    console.log("Record ID:", result.id);
    console.log("Source Type:", result.sourceType);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run test
testIngestion();