import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-12 px-4 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-2">
            Knowledge Archive System
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Capture, organize, and retrieve knowledge from any source
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Add New Record</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Ingest content from URLs, YouTube videos, images, or notes
              </p>
              <Button asChild>
                <Link href="/records/add">Add Record</Link>
              </Button>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Browse Archive</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Search and filter your archived knowledge
              </p>
              <Button variant="outline" asChild>
                <Link href="/records">View Archive</Link>
              </Button>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Manage Tags</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Organize content with custom tags and categories
              </p>
              <Button variant="outline" asChild>
                <Link href="/tags">Manage Tags</Link>
              </Button>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Settings</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Configure your knowledge archive preferences
              </p>
              <Button variant="outline" asChild>
                <Link href="/settings">Settings</Link>
              </Button>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50 mb-2">1. Ingest</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Add content from URLs, YouTube videos, images, or notes
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50 mb-2">2. Process</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Extract text, entities, and generate summaries
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50 mb-2">3. Search</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Find information using semantic and keyword search
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
