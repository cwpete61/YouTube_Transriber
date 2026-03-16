"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-black dark:text-zinc-50">Knowledge Archive</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/records" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium text-black dark:text-zinc-50"
              >
                Archive
              </Link>
              <Link 
                href="/records/add" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-black dark:text-zinc-50"
              >
                Add Record
              </Link>
              <Link 
                href="/tags" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-black dark:text-zinc-50"
              >
                Tags
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link 
                href="/settings" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-black dark:text-zinc-50"
              >
                Settings
              </Link>
            </div>
            <div className="sm:hidden flex items-center ml-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 space-y-2">
                    <Link 
                      href="/records" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-zinc-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Archive
                    </Link>
                    <Link 
                      href="/records/add" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-zinc-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Add Record
                    </Link>
                    <Link 
                      href="/tags" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-zinc-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Tags
                    </Link>
                    <Link 
                      href="/settings" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-zinc-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Settings
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}