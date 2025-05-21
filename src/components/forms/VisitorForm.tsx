
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { toast } from "sonner";

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    visitorName: "",
    email: "",
    phone: "",
    idType: "aadhar",
    idNumber: "",
    purpose: "",
    hostName: "",
    visitDate: "",
    visitTime: "",
    organization: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Visitor registration submitted successfully!");
    // Reset form after submission
    setFormData({
      visitorName: "",
      email: "",
      phone: "",
      idType: "aadhar",
      idNumber: "",
      purpose: "",
      hostName: "",
      visitDate: "",
      visitTime: "",
      organization: ""
    });
  };

  return (
    <div className="vms-card">
      <h3 className="text-xl font-bold text-ndma-blue mb-6">Register New Visitor</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visitor Name*
            </label>
            <input
              type="text"
              name="visitorName"
              value={formData.visitorName}
              onChange={handleInputChange}
              required
              className="vms-input"
              placeholder="Enter full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="vms-input"
              placeholder="Enter email address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="vms-input"
              placeholder="Enter 10-digit phone number"
              maxLength={10}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="vms-input"
              placeholder="Enter organization name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Type*
            </label>
            <select
              name="idType"
              value={formData.idType}
              onChange={handleInputChange}
              required
              className="vms-input"
            >
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="driving">Driving License</option>
              <option value="voter">Voter ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID Number*
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              required
              className="vms-input"
              placeholder="Enter ID number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Host Name*
            </label>
            <input
              type="text"
              name="hostName"
              value={formData.hostName}
              onChange={handleInputChange}
              required
              className="vms-input"
              placeholder="Enter host name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Visit*
            </label>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              required
              className="vms-input"
              rows={1}
              placeholder="Brief description of visit purpose"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visit Date*
            </label>
            <div className="relative">
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                required
                className="vms-input"
              />
              <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visit Time*
            </label>
            <input
              type="time"
              name="visitTime"
              value={formData.visitTime}
              onChange={handleInputChange}
              required
              className="vms-input"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="vms-btn-outline"
              onClick={() => {
                setFormData({
                  visitorName: "",
                  email: "",
                  phone: "",
                  idType: "aadhar",
                  idNumber: "",
                  purpose: "",
                  hostName: "",
                  visitDate: "",
                  visitTime: "",
                  organization: ""
                });
              }}
            >
              Clear Form
            </button>
            <button type="submit" className="vms-btn-primary">
              Submit Registration
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VisitorForm;
