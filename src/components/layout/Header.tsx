
import React from "react";
import { Link } from "react-router-dom";
import { Bell, Calendar, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="vms-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="mr-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/placeholder.svg" alt="NDMA Logo" className="h-10 w-10" />
              <div>
                <h1 className="text-lg font-bold leading-none text-ndma-blue">NDMA</h1>
                <p className="text-xs text-gray-500">Visitor Management System</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:text-ndma-blue">
            <Calendar size={20} />
          </button>
          <button className="relative p-2 text-gray-500 hover:text-ndma-blue">
            <Bell size={20} />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-ndma-orange"></span>
          </button>
          <div className="flex items-center gap-3 border-l pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-ndma-blue">
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
