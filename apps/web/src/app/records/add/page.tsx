import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Add New Record</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Choose a source type to begin adding content to your knowledge archive
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">URL Ingestion</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Add content from web pages. We'll extract readable content, metadata, and generate summaries.
          </p>
          <Button asChild>
            <Link href="/records/add/url">Add URL</Link>
          </Button>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">YouTube Ingestion</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Add YouTube videos. We'll extract metadata, transcribe audio, and create summaries.
          </p>
          <Button asChild>
            <Link href="/records/add/youtube">Add YouTube</Link>
          </Button>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Image/Scan Ingestion</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Upload images or scanned documents. We'll extract text via OCR and generate summaries.
          </p>
          <Button asChild>
            <Link href="/records/add/image">Add Image/Scan</Link>
          </Button>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Note Ingestion</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Add notes and memos. We'll process the content and create structured records.
          </p>
          <Button asChild>
            <Link href="/records/add/note">Add Note</Link>
          </Button>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium text-black dark:text-zinc-50 mb-2">1. Ingest</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Add content from your chosen source type
            </p>
          </div>
          <div>
            <h3 className="font-medium text-black dark:text-zinc-50 mb-2">2. Process</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Extract text, entities, and generate summaries
            </p>
          </div>
          <div>
            <h3 className="font-medium text-black dark:text-zinc-50 mb-2">3. Store</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Save and organize your knowledge in the archive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}