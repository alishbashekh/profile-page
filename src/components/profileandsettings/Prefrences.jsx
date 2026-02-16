import { FolderArrowDownIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Preferences = () => {
  return (
    <div className="bg-(--bg-primary) p-4 space-y-6">
      <h3 className="text-lg font-bold text-(--text-primary) mb-6">
        Display Settings
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Language
          </label>
          <select
            defaultValue="English"
            className="w-full rounded-xl border border-(--border) bg-(--bg-surface) px-4 py-2.5 text-md
               focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
               transition-all duration-200"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Timezone
          </label>
          <select
            defaultValue="Gulf Standard Time (GMT)"
            className="w-full rounded-xl border border-(--border) bg-(--bg-surface) px-4 py-2.5 text-md
               focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
               transition-all duration-200"
          >
            <option value="Gulf Standard Time (GMT)">Gulf Standard Time (GMT)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        {/* Date Format */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Date Format
          </label>
          <select
            defaultValue="DD/MM/YYYY"
            className="w-full rounded-xl border border-(--border) bg-(--bg-surface) px-4 py-2.5 text-md
               focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
               transition-all duration-200"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          </select>
        </div>

        {/* Default Currency */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Default Currency
          </label>
          <select
            defaultValue="AED - UAE Dirham"
            className="w-full rounded-xl border border-(--border) bg-(--bg-surface) px-4 py-2.5 text-md
               focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
               transition-all duration-200"
          >
            <option value="AED - UAE Dirham">AED - UAE Dirham</option>
            <option value="USD - US Dollar">USD - US Dollar</option>
          </select>
        </div>
      </div>

      <div className="border-t border-(--border) my-3 mt-5"></div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-3 text-white bg-(--primary) hover:bg-(--secondary) font-semibold border rounded-xl transition-all px-3 py-3 duration-200">
          <FolderArrowDownIcon className="w-6 h-6 text-white"/>
          Save Preferences
        </button>
      </div>
    </div>
  )
}

export default Preferences
