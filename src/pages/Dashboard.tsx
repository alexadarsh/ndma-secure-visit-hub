
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import VisitorTable from "@/components/dashboard/VisitorTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-gray-50 p-6">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold text-ndma-blue">Dashboard</h1>
              
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <Link to="/registration" className="vms-btn-primary">
                  Register Visitor
                </Link>
                <Link to="/checkin" className="vms-btn-secondary">
                  Check-in Visitor
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <DashboardStats />
            
            <VisitorTable />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Emergency Evacuation Card */}
              <div className="vms-card border-l-4 border-red-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-ndma-blue mb-2">Emergency Evacuation</h3>
                    <p className="text-gray-600 mb-4 sm:mb-0">
                      Currently 18 visitors in the building. Print evacuation list for emergency protocols.
                    </p>
                  </div>
                  
                  <button className="vms-btn-secondary bg-red-500">
                    Print Evacuation List
                  </button>
                </div>
              </div>
              
              {/* Quick Actions Card */}
              <div className="vms-card">
                <h3 className="text-lg font-bold text-ndma-blue mb-4">Quick Actions</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/registration" className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 text-center">
                    Add New Visitor
                  </Link>
                  <Link to="/checkin" className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 text-center">
                    Check-In/Out
                  </Link>
                  <Link to="/visitors" className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 text-center">
                    View All Visitors
                  </Link>
                  <Link to="/admin" className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 text-center">
                    System Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
