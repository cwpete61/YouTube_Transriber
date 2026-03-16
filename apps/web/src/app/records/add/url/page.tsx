import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AddUrlRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Add URL Record</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter a URL to capture and store its content in your knowledge archive
        </p>
      </div>

      <form className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input 
                id="url" 
                placeholder="https://example.com/article" 
                className="mt-1"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Enter the full URL of the web page you want to archive
              </p>
            </div>

            <div>
              <Label htmlFor="title">Title (Optional)</Label>
              <Input 
                id="title" 
                placeholder="Enter a custom title" 
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea 
                id="description" 
                placeholder="Add a brief description of this content" 
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tags" 
                placeholder="Enter tags separated by commas" 
                className="mt-1"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Example: technology, ai, machine-learning
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input 
                id="save-html" 
                type="checkbox" 
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Label htmlFor="save-html">Save HTML snapshot</Label>
            </div>

            <div className="flex items-center space-x-2">
              <input 
                id="save-screenshot" 
                type="checkbox" 
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Label htmlFor="save-screenshot">Save screenshot</Label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" asChild>
            <Link href="/records/add">Cancel</Link>
          </Button>
          <Button type="submit">Add to Archive</Button>
        </div>
      </form>
    </div>
  );
}