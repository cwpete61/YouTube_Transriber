import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AddImageRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Add Image/Scan Record</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Upload an image or scanned document to capture and store its content in your knowledge archive
        </p>
      </div>

      <form className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="image-upload">Upload Image/Scan</Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656-5.656l-6.102 6.102M10 16l-3.172-3.172a4 4 0 015.656-5.656l6.102 6.102" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                placeholder="Enter a title for this document" 
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
                Example: document, research, notes
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input 
                id="save-original" 
                type="checkbox" 
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Label htmlFor="save-original">Save original asset</Label>
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