
import { Link } from "react-router-dom";
import { ArrowRight, UserCheck, ClipboardList, CheckSquare, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-ndma-blue text-white">
        <div className="vms-container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                National Disaster Management Authority
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">Visitor Management System</h2>
              <p className="text-lg mb-8 text-gray-300">
                A secure, smart, and centralized system to streamline visitor check-in/check-out processes,
                enhance physical security, and maintain digital records of all visitor interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/registration" className="vms-btn-secondary inline-flex items-center justify-center">
                  Register as Visitor
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/dashboard" className="bg-white text-ndma-blue font-medium py-2 px-6 rounded-md transition-colors hover:bg-gray-100 inline-flex items-center justify-center">
                  Staff Login
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/placeholder.svg" alt="NDMA Building" className="mx-auto rounded-lg shadow-xl w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="vms-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-ndma-blue">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="vms-card flex flex-col items-center text-center">
              <div className="bg-ndma-blue p-4 rounded-full mb-6">
                <ClipboardList size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visitor Pre-Registration</h3>
              <p className="text-gray-600">
                Schedule appointments online and capture all necessary visitor details before arrival.
              </p>
            </div>
            
            <div className="vms-card flex flex-col items-center text-center">
              <div className="bg-ndma-orange p-4 rounded-full mb-6">
                <CheckSquare size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Check-In/Out Management</h3>
              <p className="text-gray-600">
                Streamlined check-in process with self-service kiosks and QR code functionality.
              </p>
            </div>
            
            <div className="vms-card flex flex-col items-center text-center">
              <div className="bg-ndma-lightBlue p-4 rounded-full mb-6">
                <UserCheck size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">ID Verification</h3>
              <p className="text-gray-600">
                Integration with government ID validation and secure document upload.
              </p>
            </div>
            
            <div className="vms-card flex flex-col items-center text-center">
              <div className="bg-red-500 p-4 rounded-full mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Management</h3>
              <p className="text-gray-600">
                Real-time dashboard of all visitors with emergency evacuation features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="vms-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to experience our Visitor Management System?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your visitor processing, enhance security, and create a professional impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registration" className="vms-btn-primary">
              Register a Visit
            </Link>
            <Link to="/dashboard" className="vms-btn-outline">
              Explore Dashboard
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-ndma-blue text-white py-8 mt-auto">
        <div className="vms-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">NDMA Visitor Management System</h3>
              <p className="text-sm text-gray-300">© 2025 National Disaster Management Authority</p>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
