import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecordDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch from the database
  const record = {
    id: params.id,
    title: "Introduction to Machine Learning",
    sourceType: "URL",
    sourceUrl: "https://example.com/ml-intro",
    description: "A comprehensive introduction to machine learning concepts and algorithms.",
    summary: "This article covers the fundamentals of machine learning including supervised and unsupervised learning approaches, common algorithms, and practical applications.",
    createdAt: "2023-05-15",
    updatedAt: "2023-05-15",
    tags: ["ML", "AI", "tutorial"],
    entities: ["Algorithm", "Supervised Learning", "Unsupervised Learning"],
    transcript: "",
    ocrText: ""
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/records">← Back to Archive</Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-black dark:text-zinc-50">{record.title}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                {record.sourceType}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Created: {record.createdAt}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Edit</Button>
            <Button variant="outline">Regenerate Summary</Button>
            <Button>Export</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Description</h2>
            <p className="text-gray-700 dark:text-gray-300">{record.description}</p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">{record.summary}</p>
          </div>

          {record.transcript && (
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Transcript</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{record.transcript}</p>
            </div>
          )}

          {record.ocrText && (
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">OCR Text</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{record.ocrText}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Metadata</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Source URL</p>
                <p className="text-sm text-gray-900 dark:text-gray-300 truncate">{record.sourceUrl}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Created At</p>
                <p className="text-sm text-gray-900 dark:text-gray-300">{record.createdAt}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Updated At</p>
                <p className="text-sm text-gray-900 dark:text-gray-300">{record.updatedAt}</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {record.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Entities</h2>
            <div className="flex flex-wrap gap-2">
              {record.entities.map((entity, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                  {entity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}