import { 
  BuildingOffice2Icon, 
  CameraIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/16/solid'
import React from 'react'

const ProfileHeader = ({ action }) => {
  return (
    <div className="bg-(--bg-surface) rounded-2xl shadow-sm border border-(--border) p-6 flex items-center justify-between">
      
      {/* User Info */}
      <div className="flex items-center gap-5">
        {/* Avatar */}
        <div className="relative w-[120px] h-[120px]">
          <div className="w-[120px] h-[120px] rounded-full bg-blue-700 flex items-center justify-center text-white text-3xl font-bold">
            JD
          </div>
          <div className="absolute bottom-0 right-0 bg-(--bg-primary) rounded-full p-1 flex items-center justify-center">
            <CameraIcon className="h-5 w-5 text-(--text-secondary)" />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-(--text-primary)">
              John Doe
            </h2>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
              Active
            </span>
          </div>

          <p className="text-md text-(--text-secondary) mt-1">
            john.doe@acmecorp.com
          </p>

          <div className="flex items-center gap-2 mt-2 text-sm text-(--text-secondary)">
            <BuildingOffice2Icon className="w-4 h-4 text-(--text-secondary)" />
            <span>ACME Corporation</span>
            <ShieldCheckIcon className="w-4 h-4 text-(--text-secondary)" />
            <span>Admin</span>
          </div>
        </div>
      </div>

      {/* Action Slot */}
      {action && <div>{action}</div>}
    </div>
  )
}

export default ProfileHeader
