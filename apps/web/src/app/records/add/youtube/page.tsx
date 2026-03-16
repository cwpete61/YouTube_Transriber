import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AddYoutubeRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Add YouTube Record</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter a YouTube URL to capture and store its content in your knowledge archive
        </p>
      </div>

      <form className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="youtube-url">YouTube URL</Label>
              <Input 
                id="youtube-url" 
                placeholder="https://www.youtube.com/watch?v=..." 
                className="mt-1"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Enter the full URL of the YouTube video you want to archive
              </p>
            </div>

            <div>
              <Label htmlFor="title">Title Override</Label>
              <Input 
                id="title" 
                placeholder="Enter a custom title (optional)" 
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
                Example: tutorial, programming, javascript
              </p>
            </div>

            <div>
              <Label htmlFor="supporting-links">Supporting Links (Optional)</Label>
              <Textarea 
                id="supporting-links" 
                placeholder="Enter supporting links (one per line)" 
                className="mt-1"
                rows={3}
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Add any related links that might be helpful
              </p>
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