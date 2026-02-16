import { GlobeAltIcon, KeyIcon, ShieldExclamationIcon } from "@heroicons/react/16/solid";

const Security = () => {
  return (
    <div className="space-y-8 bg-(--bg-primary) p-4">

      {/* Password Section */}
      <div>
        <h3 className="text-lg font-bold text-(--text-primary) mb-4 px-2">
          Password
        </h3>

        <div className="rounded-2xl shadow-lg bg-(--bg-surface) border border-(--border) p-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium">Change Password</h2>
            <p className="text-sm text-(--text-secondary)">
              Last changed 30 days ago
            </p>
          </div>

          <button className="flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200">
            <KeyIcon className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div>
        <h3 className="text-lg font-bold text-(--text-primary) mb-4 px-2">
          Two-Factor Authentication
        </h3>

        <div className="bg-(--bg-surface) rounded-2xl shadow-sm border border-green-500 p-4 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-green-100">
              <ShieldExclamationIcon className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium">Enable 2FA</h2>
              <p className="text-sm text-(--text-secondary)">Using SMS verification</p>
            </div>
          </div>
          <button className="flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200">
            Manage
          </button>
        </div>
      </div>

      {/* Login Sessions */}
      <div>
        <h3 className="text-lg font-bold text-(--text-primary) mb-4 px-2">
          Login Sessions
        </h3>

        {[
          { device: "Windows PC - Chrome", location: "Dubai, UAE", status: "Active", time: "Current Session" },
          { device: "iPhone 14 Pro - Safari", location: "Dubai, UAE", status: "Revoke", time: "2 hours ago" },
          { device: "MacBook Pro - Chrome", location: "Abu Dhabi, UAE", status: "Revoke", time: "Yesterday" },
        ].map((session, idx) => (
          <div key={idx} className="bg-(--bg-surface) border border-(--border) rounded-2xl shadow-sm p-4 mb-3 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg border border-(--border)">
                <GlobeAltIcon className="w-6 h-6 text-(--text-secondary)" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{session.device}</h2>
                <p className="text-sm text-(--text-secondary)">{session.location}</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <p className="text-sm text-(--text-secondary)">{session.time}</p>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${session.status === "Active" ? "bg-green-100 text-green-700" : "text-red-500"}`}>
                {session.status}
              </span>
            </div>
          </div>
        ))}

        <button className="flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-3 duration-200 w-full mt-2">
          Sign out all other Sessions
        </button>
      </div>
    </div>
  );
};

export default Security;
