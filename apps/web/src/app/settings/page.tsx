import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your knowledge archive preferences and account settings
        </p>
      </div>

      <div className="space-y-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Account Settings</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="Enter your email" 
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                placeholder="Enter new password" 
                className="mt-1"
              />
            </div>

            <div className="flex justify-end">
              <Button>Update Account</Button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Preferences</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50">Dark Mode</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable dark theme</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50">Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive email notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-black dark:text-zinc-50">Auto-save</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Automatically save drafts</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Danger Zone</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="font-medium text-black dark:text-zinc-50 mb-2">Delete Account</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Permanently delete your account and all associated data.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}