import {
  LayoutDashboard,
  ArrowLeftRight,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({
  isOpen,
  isCollapsed,
  closeSidebar,
}) {
  const [openTransactions, setOpenTransactions] = useState(true);

  return (
    <aside
      className={`
        fixed md:static z-40 top-0 left-0 h-full
        transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isCollapsed ? "md:w-20" : "md:w-72"}
        w-72
      `}
      style={{ background: "#0E3A8A" }}
    >
      <div className="flex flex-col h-full text-white">

        {/* ================= BRAND ================= */}
        <div className="p-6 border-b border-white/10">
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-semibold">Al Dar</h1>
              <p className="text-sm text-white/70">Exchange Portal</p>
            </div>
          )}
        </div>

        {/* ================= USER ================= */}
        {!isCollapsed && (
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center font-bold">
                AC
              </div>
              <div>
                <p className="font-semibold">ACME Corporation</p>
                <p className="text-sm text-white/60">Corporate Admin</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= MENU ================= */}
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">

          {/* MAIN MENU */}
          <div>
            {!isCollapsed && (
              <p className="text-xs uppercase text-white/50 mb-4">
                Main Menu
              </p>
            )}

            {/* Dashboard */}
            <Item
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              collapsed={isCollapsed}
              active
              onClick={closeSidebar}
            />

            {/* Transactions */}
            <button
              onClick={() => setOpenTransactions(!openTransactions)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10 mt-2"
            >
              <div className="flex items-center gap-3">
                <ArrowLeftRight size={20} />
                {!isCollapsed && <span>Transactions</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openTransactions ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Dropdown */}
            {openTransactions && !isCollapsed && (
              <div className="ml-6 mt-3 space-y-2 border-l border-white/20 pl-4">
                <button className="block w-full text-left px-3 py-2 rounded-md bg-blue-900 text-yellow-400">
                  All Transactions
                </button>
                <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10">
                  Create Transaction
                </button>
              </div>
            )}
          </div>

          {/* ================= ACCOUNT ================= */}
          <div>
            {!isCollapsed && (
              <p className="text-xs uppercase text-white/50 mb-4">
                Account
              </p>
            )}

            <Item
              icon={<User size={20} />}
              label="Profile"
              collapsed={isCollapsed}
              onClick={closeSidebar}
            />

            <Item
              icon={<Settings size={20} />}
              label="Settings"
              collapsed={isCollapsed}
              onClick={closeSidebar}
            />
          </div>
        </nav>

        {/* ================= LOGOUT ================= */}
        <div className="p-4 border-t border-white/10">
          <Item
            icon={<LogOut size={20} />}
            label="Log out"
            collapsed={isCollapsed}
            onClick={closeSidebar}
          />
        </div>
      </div>
    </aside>
  );
}

/* ================= ITEM COMPONENT ================= */

function Item({ icon, label, collapsed, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 w-full px-4 py-3 rounded-lg transition
        ${active ? "bg-white text-blue-900 font-semibold" : "hover:bg-white/10"}
      `}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </button>
  );
}
