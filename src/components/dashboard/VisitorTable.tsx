
import React from "react";
import { 
  CheckCircle,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Visitor {
  id: string;
  name: string;
  purpose: string;
  host: string;
  checkInTime: string;
  checkOutTime: string | null;
  status: "active" | "completed" | "scheduled";
}

const mockVisitors: Visitor[] = [
  {
    id: "VT001",
    name: "Rahul Sharma",
    purpose: "Meeting with Director",
    host: "Dr. Vijay Kumar",
    checkInTime: "09:30 AM",
    checkOutTime: null,
    status: "active"
  },
  {
    id: "VT002",
    name: "Priya Patel",
    purpose: "Document Submission",
    host: "Ajay Singh",
    checkInTime: "10:15 AM",
    checkOutTime: "11:20 AM",
    status: "completed"
  },
  {
    id: "VT003",
    name: "Amit Khanna",
    purpose: "Training Session",
    host: "Dr. Neha Gupta",
    checkInTime: "08:45 AM",
    checkOutTime: null,
    status: "active"
  },
  {
    id: "VT004",
    name: "Sanjay Mehta",
    purpose: "Interview",
    host: "HR Department",
    checkInTime: "14:00 PM",
    checkOutTime: null,
    status: "scheduled"
  },
  {
    id: "VT005",
    name: "Deepika Reddy",
    purpose: "Project Discussion",
    host: "Tech Team",
    checkInTime: "11:30 AM",
    checkOutTime: "12:45 PM",
    status: "completed"
  }
];

const VisitorTable = () => {
  return (
    <div className="vms-card">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-lg font-bold text-ndma-blue mb-3 sm:mb-0">Recent Visitors</h3>
        
        <div className="flex items-center w-full sm:w-auto">
          <div className="relative w-full sm:w-auto mr-4">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search visitors..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-ndma-lightBlue focus:border-transparent"
            />
          </div>
          
          <select className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ndma-lightBlue focus:border-transparent">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Visitor ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purpose
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Host
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check In
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check Out
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockVisitors.map((visitor) => (
              <tr key={visitor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ndma-blue">
                  {visitor.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {visitor.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {visitor.purpose}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {visitor.host}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {visitor.checkInTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {visitor.checkOutTime || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    visitor.status === "active" 
                      ? "bg-green-100 text-green-800" 
                      : visitor.status === "completed"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {visitor.status === "active" && <CheckCircle size={12} className="mr-1" />}
                    {visitor.status === "scheduled" && <Clock size={12} className="mr-1" />}
                    {visitor.status === "active" && "Active"}
                    {visitor.status === "completed" && "Completed"}
                    {visitor.status === "scheduled" && "Scheduled"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
          <span className="font-medium">42</span> visitors
        </p>
        
        <div className="flex gap-2">
          <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </button>
          <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
            Next
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorTable;
