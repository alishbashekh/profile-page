// C:\Users\PMLS\aldar\src\pages\ProfilePage.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import Profileheader from '../components/profileandsettings/Profileheader';
import Profiletabs from '../components/profileandsettings/Profiletabs';
import ProfileForm from '../components/profileandsettings/ProfileForm';
import { PencilIcon } from '@heroicons/react/16/solid';
import Dashboard from '../layout/DashboardLayout';
import DashboardContent from '../components/dashboard/DashboardContent';

const ProfilePage = () => {
  const navigate = useNavigate(); // ✅ fix: define navigate

  return (
    <DashboardContent>
      <div className="bg-[var(--bg-primary)] min-h-screen">
        <div className="flex flex-col max-w-5xl mx-auto">
          <h1 className='text-3xl font-semibold text-[var(--text-primary)] mb-3'>
            Profile & Settings
          </h1>
          <h1 className='text-sm text-[var(--text-secondary)] mb-6'>
            Manage your account settings and preferences
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-10">
          <Profileheader
            action={
              <button
                onClick={() => navigate("/dashboard/setting")} // ✅ fixed path
                className="px-3 py-3 flex items-center rounded-xl border border-blue-900 text-blue-900 text-sm font-medium hover:bg-blue-100 transition-all duration-200"
              >
                <PencilIcon className="w-5 h-5" />
                EDIT PROFILE
              </button>
            }
          />

          <div className="bg-[var(--bg-surface)] rounded-2xl shadow-sm border-slate-200 p-4">
            <Profiletabs />
            <div className="border-t border-slate-200 my-3"></div>
            <ProfileForm />
          </div>
        </div>
      </div>
    </DashboardContent>
  );
};

export default ProfilePage;
