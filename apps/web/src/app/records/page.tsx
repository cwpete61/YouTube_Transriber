import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecordsPage() {
  // This would normally fetch from the database
  const records = [
    {
      id: "1",
      title: "Introduction to Machine Learning",
      sourceType: "URL",
      createdAt: "2023-05-15",
      tags: ["ML", "AI"]
    },
    {
      id: "2",
      title: "YouTube Video Analysis",
      sourceType: "YOUTUBE",
      createdAt: "2023-05-10",
      tags: ["video", "analysis"]
    },
    {
      id: "3",
      title: "Research Paper Summary",
      sourceType: "SCAN",
      createdAt: "2023-05-05",
      tags: ["research", "paper"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Knowledge Archive</h1>
        <Button asChild>
          <Link href="/records/add">Add New Record</Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <Button variant="outline" className="bg-white dark:bg-gray-800">All</Button>
        <Button variant="outline" className="bg-white dark:bg-gray-800">URL</Button>
        <Button variant="outline" className="bg-white dark:bg-gray-800">YouTube</Button>
        <Button variant="outline" className="bg-white dark:bg-gray-800">Image</Button>
        <Button variant="outline" className="bg-white dark:bg-gray-800">Note</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {records.map((record) => (
          <div key={record.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">{record.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Source: {record.sourceType}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                {record.sourceType}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {record.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Created: {record.createdAt}</span>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <Button variant="outline" className="rounded-l-md">Previous</Button>
          <Button variant="outline" className="border-l-0">Next</Button>
        </nav>
      </div>
    </div>
  );
}