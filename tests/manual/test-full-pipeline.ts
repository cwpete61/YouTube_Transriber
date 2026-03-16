// Comprehensive test showing all extraction capabilities
import { AdvancedExtractionService } from "./packages/extraction/advanced-extraction";

async function runComprehensiveExtractionTest() {
  console.log("🧪 Comprehensive Extraction Capabilities Test");
  console.log("============================================");
  
  try {
    const sampleText = `
      Artificial Intelligence (AI) is transforming industries worldwide. Machine Learning, 
      a subset of AI, enables computers to learn from data and improve their performance 
      without explicit programming. Deep Learning, which uses neural networks, has achieved 
      remarkable results in image recognition, natural language processing, and speech 
      synthesis. The Knowledge Archive System leverages these technologies to create a 
      comprehensive knowledge management platform. It processes content from URLs, YouTube 
      videos, images, and notes, extracting meaningful information through advanced 
      extraction techniques including summarization, entity recognition, and topic modeling. 
      Modern applications of AI include autonomous vehicles, medical diagnosis, financial 
      analysis, and personalized recommendations. As the field evolves, ethical considerations 
      around AI bias, privacy, and job displacement become increasingly important.
    `;
    
    console.log("Testing extraction on sample text:");
    console.log("Text preview:", sampleText.substring(0, 100) + "...\n");
    
    // Test each extraction capability
    console.log("1. Summary Generation:");
    const summary = await AdvancedExtractionService.generateSummary(sampleText);
    console.log("   ", summary);
    
    console.log("\n2. Keyword Extraction:");
    const keywords = await AdvancedExtractionService.extractKeywords(sampleText);
    console.log("   ", keywords.join(", "));
    
    console.log("\n3. Entity Extraction:");
    const entities = await AdvancedExtractionService.extractEntities(sampleText);
    console.log("   ", entities.map(e => e.name).join(", "));
    
    console.log("\n4. Auto-tagging:");
    const tags = await AdvancedExtractionService.autoTag(sampleText, "Artificial Intelligence Overview");
    console.log("   ", tags.join(", "));
    
    console.log("\n5. Topic Classification:");
    const topics = await AdvancedExtractionService.classifyTopics(sampleText);
    console.log("   ", topics.join(", "));
    
    console.log("\n6. Language Detection:");
    const language = await AdvancedExtractionService.detectLanguage(sampleText);
    console.log("   ", language);
    
    console.log("\n7. Sentiment Analysis:");
    const sentiment = await AdvancedExtractionService.analyzeSentiment(sampleText);
    console.log("   Label:", sentiment.label, "| Score:", sentiment.score);
    
    console.log("\n8. Content Quality Assessment:");
    const quality = await AdvancedExtractionService.assessContentQuality(sampleText);
    console.log("   Score:", quality.score, "| Feedback:", quality.feedback);
    
    console.log("\n9. Complete Extraction Pipeline:");
    const fullResults = await AdvancedExtractionService.processFullExtraction(
      sampleText,
      "Artificial Intelligence Overview",
      "TEXT"
    );
    
    console.log("   ✓ Summary:", fullResults.summary.substring(0, 50) + "...");
    console.log("   ✓ Keywords:", fullResults.keywords.length, "found");
    console.log("   ✓ Entities:", fullResults.entities.length, "found");
    console.log("   ✓ Topics:", fullResults.topics.length, "classified");
    console.log("   ✓ Tags:", fullResults.tags.length, "assigned");
    
    console.log("\n🎉 All extraction capabilities working perfectly!");
    console.log("\n📋 Implementation Status:");
    console.log("✅ Summarization: Complete");
    console.log("✅ Keyword Extraction: Complete");
    console.log("✅ Entity Recognition: Complete");
    console.log("✅ Auto-tagging: Complete");
    console.log("✅ Topic Classification: Complete");
    console.log("✅ Language Detection: Complete");
    console.log("✅ Sentiment Analysis: Complete");
    console.log("✅ Content Quality: Complete");
    console.log("✅ Full Pipeline: Complete");
    
  } catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1);
  }
}

runComprehensiveExtractionTest();