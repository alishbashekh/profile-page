import { Link } from "react-router-dom";

export default function DashboardCard({ 
  title, 
  amount, 
  subtitle, 
  growth, 
  icon: Icon, 
  iconBg = "rgba(79, 70, 229, 0.2)",
  iconColor = "var(--primary)",
  actions = [],
  layout = "top", 
}) {
  return (
    <div
      className="card shadow-md hover:shadow-xl transition-all duration-300 border-l-4 hover:scale-105"
     
    >
      {/* Header */}
      {layout === "top" ? (
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-secondary-custom">{title}</h4>
          <div
            className="p-3 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="text-2xl" style={{ color: iconColor }} />
          </div>
        </div>
      ) : layout === "side-center" ? (
        <div className="flex items-center mb-4 gap-3">
          {/* Icon */}
          <div
            className="p-3 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="text-2xl" style={{ color: iconColor }} />
          </div>
          {/* Title & subtitle */}
          <div>
            <h4 className="text-sm font-medium text-secondary-custom">{title}</h4>
            {subtitle && <p className="text-xs text-secondary-custom">{subtitle}</p>}
          </div>
        </div>
      ) : (
        // default "side" layout
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="text-2xl" style={{ color: iconColor }} />
          </div>
          <h4 className="text-sm font-medium text-secondary-custom">{title}</h4>
        </div>
      )}

      {/* Amount */}
      {amount && <h2 className="text-2xl font-bold mb-2">{amount}</h2>}

      {/* Growth */}
      {growth && (
        <div className="mt-2 text-sm font-medium text-green-500">
          ↑ {growth} from last month
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="mt-4 flex gap-2">
          {actions.map((action, idx) => (
            <Link
              key={idx}
              to={action.link}
              className="text-[var(--primary)] text-sm font-medium hover:underline"
            >
              {action.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
