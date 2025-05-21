
import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Users, Shield, Settings as SettingsIcon, Building, UserPlus } from "lucide-react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ndma-blue">Admin Panel</h1>
            <p className="text-gray-600 mt-1">Manage system settings and configurations</p>
          </div>
          
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto mb-8">
              <TabsTrigger value="general" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <SettingsIcon size={18} />
                General
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <Users size={18} />
                Users
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <Shield size={18} />
                Security
              </TabsTrigger>
              <TabsTrigger value="departments" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <Building size={18} />
                Departments
              </TabsTrigger>
              <TabsTrigger value="hosts" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <UserPlus size={18} />
                Hosts
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2 data-[state=active]:bg-ndma-blue data-[state=active]:text-white py-2">
                <Bell size={18} />
                Notifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-6">
              <div className="vms-card">
                <h3 className="text-lg font-bold text-ndma-blue mb-6">System Configuration</h3>
                
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      defaultValue="National Disaster Management Authority"
                      className="vms-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Visit Duration (minutes)
                    </label>
                    <input
                      type="number"
                      defaultValue="60"
                      className="vms-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timezone
                    </label>
                    <select className="vms-input">
                      <option>Asia/Kolkata (GMT +5:30)</option>
                      <option>UTC</option>
                      <option>Asia/Dubai</option>
                      <option>Europe/London</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-t border-b border-gray-200">
                    <div>
                      <h4 className="font-medium">Auto-Checkout</h4>
                      <p className="text-sm text-gray-500">Automatically check out visitors after visiting hours</p>
                    </div>
                    <div className="flex items-center">
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ndma-blue"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div>
                      <h4 className="font-medium">Host Notifications</h4>
                      <p className="text-sm text-gray-500">Send email and SMS notifications to hosts on visitor arrival</p>
                    </div>
                    <div className="flex items-center">
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ndma-blue"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div>
                      <h4 className="font-medium">Badge Printing</h4>
                      <p className="text-sm text-gray-500">Automatically print visitor badges on check-in</p>
                    </div>
                    <div className="flex items-center">
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ndma-blue"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-5">
                    <button className="vms-btn-primary">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="vms-card">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">User Management</h3>
              <p className="text-gray-600">
                Manage system users, roles, and permissions.
              </p>
              <div className="mt-4">
                <button className="vms-btn-primary">Add User</button>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="vms-card">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Security Settings</h3>
              <p className="text-gray-600">
                Configure security policies, ID validation, and watchlists.
              </p>
            </TabsContent>
            
            <TabsContent value="departments" className="vms-card">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Department Configuration</h3>
              <p className="text-gray-600">
                Manage organization departments and approval workflows.
              </p>
            </TabsContent>
            
            <TabsContent value="hosts" className="vms-card">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Host Management</h3>
              <p className="text-gray-600">
                Configure host notification preferences and availability.
              </p>
            </TabsContent>
            
            <TabsContent value="notifications" className="vms-card">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Notification Settings</h3>
              <p className="text-gray-600">
                Set up SMS and email templates for system notifications.
              </p>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
