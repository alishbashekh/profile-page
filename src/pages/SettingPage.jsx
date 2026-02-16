import React, { useState } from 'react';
import SettingTabs from '../components/profileandsettings/SettingTabs';
import Security from '../components/profileandsettings/Security';
import Notifications from '../components/profileandsettings/Notifications';
import Prefrences from '../components/profileandsettings/Prefrences';
import Profileheader from '../components/profileandsettings/Profileheader';
import DashboardContent from '../components/dashboard/DashboardContent';

const SettingPage = () => {
  const [Activetab, SetActiveTab] = useState(0);

  return (
    <DashboardContent>
        <div className="flex flex-col max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Settings
          </h1>
        </div>

        {/* Profile Header & Tabs */}
        <div className="max-w-5xl mx-auto px-4 space-y-6 mb-10">
          <Profileheader />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <SettingTabs Activetab={Activetab} SetActiveTab={SetActiveTab} />
            <div className="border-t border-gray-200 my-3"></div>

            {/* Tab Panels */}
            {Activetab === 0 && <Security />}
            {Activetab === 1 && <Notifications />}
            {Activetab === 2 && <Prefrences />}
          </div>
        </div>
    
    </DashboardContent>
  );
};

export default SettingPage;
