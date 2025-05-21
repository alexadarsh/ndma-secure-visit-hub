
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Search, User, CheckCircle, XCircle, Clock } from "lucide-react";
import { toast } from "sonner";

interface VisitorData {
  id: string;
  name: string;
  email: string;
  purpose: string;
  host: string;
  phone: string;
  organization: string;
  visitTime: string;
  status: "scheduled" | "active" | "completed";
}

// Mock visitor data
const visitorData: VisitorData[] = [
  {
    id: "VT1001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    purpose: "Meeting with Director",
    host: "Dr. Vijay Kumar",
    phone: "9876543210",
    organization: "Tech Solutions Ltd",
    visitTime: "10:30 AM",
    status: "scheduled"
  },
  {
    id: "VT1002",
    name: "Priya Patel",
    email: "priya@example.com",
    purpose: "Document Submission",
    host: "Ajay Singh",
    phone: "8765432109",
    organization: "State Government",
    visitTime: "11:15 AM",
    status: "scheduled"
  }
];

const CheckIn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVisitor, setSelectedVisitor] = useState<VisitorData | null>(null);
  const [visitors, setVisitors] = useState(visitorData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would query the backend
    toast.info(`Searching for visitor: ${searchQuery}`);
  };

  const handleSelectVisitor = (visitor: VisitorData) => {
    setSelectedVisitor(visitor);
  };

  const handleCheckIn = () => {
    if (selectedVisitor) {
      setVisitors(visitors.map(v => 
        v.id === selectedVisitor.id ? { ...v, status: "active" } : v
      ));
      toast.success(`${selectedVisitor.name} has been checked in successfully!`);
      setSelectedVisitor(null);
    }
  };

  const handleCheckOut = () => {
    if (selectedVisitor) {
      setVisitors(visitors.map(v => 
        v.id === selectedVisitor.id ? { ...v, status: "completed" } : v
      ));
      toast.success(`${selectedVisitor.name} has been checked out successfully!`);
      setSelectedVisitor(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ndma-blue">Visitor Check-In / Check-Out</h1>
            <p className="text-gray-600 mt-1">Process arrivals and departures of visitors</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search Panel */}
            <div className="vms-card lg:col-span-1">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Find Visitor</h3>
              
              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, phone, or ID..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-ndma-lightBlue focus:border-transparent"
                  />
                </div>
                <button type="submit" className="vms-btn-primary w-full mt-3">
                  Search
                </button>
              </form>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-700 mb-3">Scan Options</h4>
                <div className="space-y-3">
                  <button className="vms-btn-outline w-full">
                    Scan QR Code
                  </button>
                  <button className="vms-btn-outline w-full">
                    Scan ID Document
                  </button>
                </div>
              </div>
            </div>
            
            {/* Visitor List */}
            <div className="vms-card lg:col-span-2">
              <h3 className="text-lg font-bold text-ndma-blue mb-6">Expected Visitors Today</h3>
              
              {visitors.length > 0 ? (
                <div className="space-y-4">
                  {visitors.map((visitor) => (
                    <div 
                      key={visitor.id}
                      className={`p-4 border rounded-lg transition-colors cursor-pointer ${
                        selectedVisitor?.id === visitor.id 
                          ? 'border-ndma-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-ndma-blue'
                      }`}
                      onClick={() => handleSelectVisitor(visitor)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-ndma-blue">
                            <User size={20} />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">{visitor.name}</h4>
                            <p className="text-sm text-gray-500">{visitor.email}</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            visitor.status === "active" 
                              ? "bg-green-100 text-green-800" 
                              : visitor.status === "completed"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {visitor.status === "active" && <CheckCircle size={12} className="mr-1" />}
                            {visitor.status === "completed" && <XCircle size={12} className="mr-1" />}
                            {visitor.status === "scheduled" && <Clock size={12} className="mr-1" />}
                            {visitor.status === "active" && "Active"}
                            {visitor.status === "completed" && "Completed"}
                            {visitor.status === "scheduled" && "Scheduled"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                        <div>
                          <span className="text-gray-500">Visit Time:</span> {visitor.visitTime}
                        </div>
                        <div>
                          <span className="text-gray-500">Host:</span> {visitor.host}
                        </div>
                        <div>
                          <span className="text-gray-500">Purpose:</span> {visitor.purpose}
                        </div>
                        <div>
                          <span className="text-gray-500">Phone:</span> {visitor.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No visitors found for today</p>
                </div>
              )}
              
              {selectedVisitor && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Selected: {selectedVisitor.name}</h4>
                    <div className="flex gap-3">
                      {selectedVisitor.status === "scheduled" && (
                        <button 
                          onClick={handleCheckIn}
                          className="vms-btn-primary"
                        >
                          Check In
                        </button>
                      )}
                      {selectedVisitor.status === "active" && (
                        <button 
                          onClick={handleCheckOut}
                          className="vms-btn-secondary"
                        >
                          Check Out
                        </button>
                      )}
                      <button 
                        onClick={() => setSelectedVisitor(null)}
                        className="vms-btn-outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CheckIn;
