import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AddNoteRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Add Note Record</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Create a new note to store in your knowledge archive
        </p>
      </div>

      <form className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                placeholder="Enter a title for your note" 
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="note-body">Note Body</Label>
              <Textarea 
                id="note-body" 
                placeholder="Enter the content of your note here..." 
                className="mt-1"
                rows={10}
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
                Example: personal, ideas, todo
              </p>
            </div>

            <div>
              <Label htmlFor="category">Category (Optional)</Label>
              <Input 
                id="category" 
                placeholder="Enter a category (optional)" 
                className="mt-1"
              />
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