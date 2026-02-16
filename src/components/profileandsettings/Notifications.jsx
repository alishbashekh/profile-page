import {
  BellIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
const Notifications = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    transaction: true,
    login: true,
    marketing: false,
  });

  const toggleSwitch = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const ToggleButton = ({ isOn, onClick }) => (
    <button
      onClick={onClick}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
        isOn ? "bg-blue-900" : "bg-slate-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="bg-[var(--bg-primary)] space-y-4">
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 px-4">
        Notification Channels
      </h3>
      <div className="rounded-2xl shadow-lg bg-[var(--bg-surface)] p-4 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <EnvelopeIcon className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h2 className="text-lg font-sm">Email Notifications</h2>
            <p className="text-sm text-slate-500">
              Receive notifications via email
            </p>
          </div>
        </div>
        <ToggleButton
          isOn={notifications.email}
          onClick={() => toggleSwitch("email")}
        />
      </div>
      <div className="rounded-2xl shadow-lg bg-[var(--bg-surface)] p-4 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <PhoneArrowDownLeftIcon className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h2 className="text-lg font-sm">SMS Notifications</h2>
            <p className="text-sm text-slate-500">
              Receive notifications via SMS
            </p>
          </div>
        </div>
        <ToggleButton
          isOn={notifications.sms}
          onClick={() => toggleSwitch("sms")}
        />
      </div>

      <div className="border-t border-slate-200 my-5"></div>

      {/* Alert Types */}
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 px-4">
        Alert Types
      </h3>

      {/* Transaction */}
      <div className="rounded-2xl shadow-lg bg-[var(--bg-surface)] p-4 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BellIcon className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h2 className="text-lg font-sm">Transaction Alerts</h2>
            <p className="text-sm text-slate-500">
              Get notified for all transactions
            </p>
          </div>
        </div>
        <ToggleButton
          isOn={notifications.transaction}
          onClick={() => toggleSwitch("transaction")}
        />
      </div>

      {/* Login */}
      <div className="rounded-2xl shadow-lg bg-[var(--bg-surface)] p-4 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <LockClosedIcon className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h2 className="text-lg font-sm">Login Alerts</h2>
            <p className="text-sm text-slate-500">
              Get notified for new login attempts
            </p>
          </div>
        </div>
        <ToggleButton
          isOn={notifications.login}
          onClick={() => toggleSwitch("login")}
        />
      </div>

      {/* Marketing */}
      <div className="rounded-2xl shadow-lg bg-[var(--bg-surface)] p-4 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <GlobeAltIcon className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <h2 className="text-lg font-sm">Marketing & Updates</h2>
            <p className="text-sm text-slate-500">
              News, product updates, and promotions
            </p>
          </div>
        </div>
        <ToggleButton
          isOn={notifications.marketing}
          onClick={() => toggleSwitch("marketing")}
        />
      </div>
    </div>
  );
};

export default Notifications;
