import DashboardContent from "../../components/dashboard/DashboardContent";
import DashboardCard from "../../components/app/DashboardCard";
import { dashboardData } from "../../data/dashboardData";
import { dashboardQickData } from "../../data/dashboardQickData";
import DashboardTables from "../../components/app/DashboardTable";
import DashboardCharts from "../../components/app/DashboardCharts";
// Icon background colors
const iconBgColors = [
  "rgba(79, 70, 229, 0.2)",   
  "rgba(99, 102, 241, 0.2)",  
  "rgba(245, 158, 11, 0.2)",  
  "rgba(16, 185, 129, 0.2)",  
  "rgba(59, 130, 246, 0.2)",  
  "rgba(139, 92, 246, 0.2)",  
];

// Icon colors
const iconColors = [
  "#4F46E5", 
  "#6366F1", 
  "#F59E0B", 
  "#10B981", 
  "#3B82F6", 
  "#8B5CF6", 
];

export default function Dashboard() {
  return (
    <DashboardContent title="Dashboard" description="Your personal dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {dashboardData.map((item, index) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            amount={item.amount}
            subtitle={item.subtitle}
            growth={item.growth}
            icon={item.icon}
            iconBg={iconBgColors[index]}
            iconColor={iconColors[index]} 
            actions={item.actions}
          />
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2">Quick Actions</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {dashboardQickData.map((item, index) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            iconBg={iconBgColors[index]}
            iconColor={iconColors[index]}
            layout="side-center" 
          />
        ))}
      </div>
      <DashboardTables />
      <DashboardCharts />
    </DashboardContent>
  );
}
