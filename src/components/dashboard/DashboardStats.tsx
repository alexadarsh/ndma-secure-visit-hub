
import React from "react";
import { 
  Users, 
  UserCheck, 
  Clock, 
  AlertTriangle,
  ArrowUp,
  ArrowDown
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  bgColor: string;
}

const StatCard = ({ title, value, icon, trend, bgColor }: StatCardProps) => {
  return (
    <div className="vms-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-2">
              {trend.positive ? (
                <ArrowUp size={16} className="text-green-500 mr-1" />
              ) : (
                <ArrowDown size={16} className="text-red-500 mr-1" />
              )}
              <span className={trend.positive ? "text-green-500" : "text-red-500"}>
                {trend.value}
              </span>
            </div>
          )}
        </div>
        
        <div className={`${bgColor} p-3 rounded-md`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Visitors Today"
        value="45"
        icon={<Users size={24} className="text-white" />}
        trend={{ value: "12% vs yesterday", positive: true }}
        bgColor="bg-ndma-blue"
      />
      
      <StatCard
        title="Active Visitors"
        value="18"
        icon={<UserCheck size={24} className="text-white" />}
        bgColor="bg-ndma-lightBlue"
      />
      
      <StatCard
        title="Avg. Visit Duration"
        value="1.2 hrs"
        icon={<Clock size={24} className="text-white" />}
        trend={{ value: "5% vs last week", positive: false }}
        bgColor="bg-ndma-orange"
      />
      
      <StatCard
        title="Security Alerts"
        value="2"
        icon={<AlertTriangle size={24} className="text-white" />}
        bgColor="bg-red-500"
      />
    </div>
  );
};

export default DashboardStats;
