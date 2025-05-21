
import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import VisitorForm from "@/components/forms/VisitorForm";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ndma-blue">Visitor Registration</h1>
            <p className="text-gray-600 mt-1">Create new visitor registrations and send invitations</p>
          </div>
          
          <div className="max-w-4xl">
            <VisitorForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Registration;
