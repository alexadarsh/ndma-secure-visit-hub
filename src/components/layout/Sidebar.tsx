
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart, 
  Users, 
  ClipboardList, 
  CheckSquare, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  collapsed: boolean;
}

const NavItem = ({ icon: Icon, label, to, collapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-ndma-blue text-white"
          : "text-gray-600 hover:bg-gray-100",
        collapsed && "justify-center"
      )}
    >
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col border-r border-gray-200 bg-white",
        collapsed ? "w-[72px]" : "w-[240px]"
      )}
    >
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h2 className="text-lg font-semibold text-ndma-blue">NDMA VMS</h2>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto rounded-md p-2 text-gray-500 hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        <div className="flex flex-col gap-1">
          <NavItem icon={BarChart} label="Dashboard" to="/dashboard" collapsed={collapsed} />
          <NavItem icon={Users} label="Visitors" to="/visitors" collapsed={collapsed} />
          <NavItem icon={ClipboardList} label="Registration" to="/registration" collapsed={collapsed} />
          <NavItem icon={CheckSquare} label="Check-In/Out" to="/checkin" collapsed={collapsed} />
          <NavItem icon={Settings} label="Admin Panel" to="/admin" collapsed={collapsed} />
        </div>
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <NavItem
          icon={LogOut}
          label="Logout"
          to="/"
          collapsed={collapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;
