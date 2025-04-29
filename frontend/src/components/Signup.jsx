import React from 'react';
import { useState } from 'react';

export default function LoginPreview() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    orgName: '',
    description: '',
    animalType: '',
    city: '',
    district: '',
    address: ''
  });

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Preview Container */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">Sign up as NGO</h1>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Password"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="orgName">Organization Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter organization name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded" 
              rows={3} 
              placeholder="Describe your organization"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="animalType">Type of Animals Supported</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter types of animals"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your city"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="district">District</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your district"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your address"
              required
            />
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            Login
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          This is a preview of how your login form will appear
        </div>
      </div>
    </div>
  );
}
export default LoginPreview;