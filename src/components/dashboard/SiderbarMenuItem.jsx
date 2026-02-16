import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SidebarMenuItem({ icon, label, collapsed, subMenu, active }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => subMenu && setOpen(!open)}
        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition ${
          active
            ? "bg-(--primary) text-white"
            : "hover:bg-(--bg-primary) text-(--text-primary)"
        }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span>{label}</span>}
        </div>

        {/* Show arrow only if submenu exists */}
        {!collapsed && subMenu?.length > 0 && (
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {/* Submenu */}
      {!collapsed && open && subMenu?.length > 0 && (
        <div className="ml-8 mt-1 flex flex-col space-y-1">
          {subMenu.map((item, index) => (
            <button
              key={index}
              className="flex w-full px-3 py-2 text-sm rounded-lg hover:bg-(--bg-primary) text-(--text-primary) transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
