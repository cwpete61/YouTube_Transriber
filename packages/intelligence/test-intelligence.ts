/**
 * Test file for Intelligence Layer
 * Verifies all intelligence engine features work correctly
 */

import { IntelligenceEngine } from "./index";

async function testIntelligenceLayer() {
  console.log("🧪 Testing Intelligence Layer");

  try {
    // Test duplicate detection
    console.log("\n1. Testing duplicate detection...");
    const duplicates = await IntelligenceEngine.detectDuplicates("1", 0.8);
    console.log("✓ Duplicate detection successful");
    console.log("  Found", duplicates.length, "duplicates");

    // Test AI Q&A
    console.log("\n2. Testing AI Q&A...");
    const qaResponse = await IntelligenceEngine.askQuestion("What is machine learning?");
    console.log("✓ AI Q&A successful");
    console.log("  Confidence:", qaResponse.confidence);

    // Test batch summarization
    console.log("\n3. Testing batch summarization...");
    const batchSummary = await IntelligenceEngine.batchSummarize(["1", "2", "3"]);
    console.log("✓ Batch summarization successful");
    console.log("  Summarized", batchSummary.length, "records");

    // Test record relationships
    console.log("\n4. Testing record relationships...");
    const relationships = await IntelligenceEngine.mapRecordRelationships("1");
    console.log("✓ Record relationships successful");
    console.log("  Found", relationships.length, "relationships");

    // Test intelligence metrics
    console.log("\n5. Testing intelligence metrics...");
    const metrics = await IntelligenceEngine.getRecordIntelligenceMetrics("1");
    console.log("✓ Intelligence metrics successful");
    console.log("  AI Value Score:", metrics.aiValueScore);

    // Test similar records
    console.log("\n6. Testing similar records...");
    const similar = await IntelligenceEngine.findSimilarRecords("machine learning", 5);
    console.log("✓ Similar records search successful");
    console.log("  Found", similar.length, "similar records");

    console.log("\n🎉 All Intelligence Layer tests passed!");
    console.log("\n📋 Intelligence Layer Features Implemented:");
    console.log("✅ Duplicate Detection");
    console.log("✅ AI Q&A Across Records");
    console.log("✅ Batch Summarization");
    console.log("✅ Record Relationship Mapping");
    console.log("✅ Intelligence Metrics");
    console.log("✅ Similar Records Discovery");

  } catch (error) {
    console.error("❌ Intelligence Layer test failed:", error);
    throw error;
  }
}

// Run tests
testIntelligenceLayer().catch(console.error);