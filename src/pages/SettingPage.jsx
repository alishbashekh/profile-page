import React, { useState } from 'react'
import SettingTabs from '../components/profileandsettings/SettingTabs'
import Security from '../components/profileandsettings/Security'
import Notifications from '../components/profileandsettings/Notifications'
import Prefrences from '../components/profileandsettings/Prefrences'
import Profileheader from '../components/profileandsettings/Profileheader'
import Dashboard from '../layout/DashboardLayout'
import DashboardContent from '../components/dashboard/DashboardContent'

const SettingPage = () => {
    const[Activetab ,SetActiveTab] =useState(0)
  return (
     <DashboardContent>
    <div className='bg-[var(--bg-primary)]'>
        <div className="flex flex-col max-w-5xl mx-auto">
        <h1 className='text-3xl font-semibold text-[var(--text-primary)] mb-3'>
          Settings
        </h1>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          <Profileheader/>
        <div className="bg-[var(--bg-primary)] rounded-2xl shadow-sm border-slate-200 p-4 mb-10">
            <SettingTabs Activetab={Activetab} SetActiveTab={SetActiveTab}/>
            <div className="border-t border-slate-200 my-3"></div>
            {Activetab === 0 && <Security/>}
            {Activetab === 1 && <Notifications/>}
            {Activetab === 2 && <Prefrences/>}
        </div>
    </div>
    
    </div>
    </DashboardContent>
  )
}

export default SettingPage
