import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TagsPage() {
  // This would normally fetch from the database
  const tags = [
    { id: "1", name: "ML", slug: "ml", color: "#3b82f6", count: 12 },
    { id: "2", name: "AI", slug: "ai", color: "#10b981", count: 8 },
    { id: "3", name: "Python", slug: "python", color: "#f59e0b", count: 15 },
    { id: "4", name: "React", slug: "react", color: "#8b5cf6", count: 7 },
    { id: "5", name: "Tutorial", slug: "tutorial", color: "#ef4444", count: 9 },
    { id: "6", name: "Research", slug: "research", color: "#06b6d4", count: 5 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Manage Tags</h1>
        <Button>Add New Tag</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tags.map((tag) => (
          <div key={tag.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">{tag.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Slug: {tag.slug}</p>
              </div>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" 
                style={{ backgroundColor: `${tag.color}20`, color: tag.color }}
              >
                {tag.count} records
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}