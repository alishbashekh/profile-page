// C:\Users\PMLS\aldar\src\pages\ProfilePage.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import Profileheader from '../components/profileandsettings/Profileheader';
import Profiletabs from '../components/profileandsettings/Profiletabs';
import ProfileForm from '../components/profileandsettings/ProfileForm';
import { PencilIcon } from '@heroicons/react/16/solid';
import DashboardContent from '../components/dashboard/DashboardContent';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <DashboardContent>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Title */}
        <div className="flex flex-col max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Profile & Settings
          </h1>
          <h2 className="text-sm text-gray-600 mb-6">
            Manage your account settings and preferences
          </h2>
        </div>

        {/* Profile Header & Tabs */}
        <div className="max-w-5xl mx-auto px-4 space-y-6 mb-10">
          <Profileheader
            action={
              <button
                onClick={() => navigate("/dashboard/setting")}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-100 transition duration-200"
              >
                <PencilIcon className="w-5 h-5" />
                EDIT PROFILE
              </button>
            }
          />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <Profiletabs />
            <div className="border-t border-gray-200 my-3"></div>
            <ProfileForm />
          </div>
        </div>
      </div>
    </DashboardContent>
  );
};

export default ProfilePage;
