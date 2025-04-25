import { useState } from 'react';
import { Camera } from 'lucide-react';

const ReportAnimalForm = () => {
  const [injuryScale, setInjuryScale] = useState(1);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [animalType, setAnimalType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleScaleChange = (e) => {
    setInjuryScale(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = () => {
    // In a real app, this would open file picker
    alert('Image upload functionality would be implemented here');
  };

  const handleAnimalTypeChange = (type) => {
    setAnimalType(type);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    alert('Alert sent to nearby NGOs!');
    // In a real app, this would submit the form data
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-teal-100 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-400 text-white text-center py-2 px-4 rounded-t-lg">
          <h1 className="text-xl font-bold">Report An Animal</h1>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-5">
          {/* Image Upload Section */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">Image</label>
            <div 
              onClick={handleImageUpload}
              className="h-24 bg-white rounded-md flex items-center justify-center cursor-pointer border-2 border-gray-300"
            >
              {image ? (
                <img src={image} alt="Animal" className="h-full object-contain" />
              ) : (
                <Camera size={40} className="text-gray-400" />
              )}
            </div>
          </div>

          {/* Animal Type Section */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">Animal Type</label>
            <div className="flex flex-wrap gap-2">
              {['Cat', 'Dog', 'Bird', 'Cow'].map(type => (
                <button
                  key={type}
                  onClick={() => handleAnimalTypeChange(type)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    animalType === type 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Injury Scale */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              On a Scale of 5 How Hurt Animal IS :
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={injuryScale}
              onChange={handleScaleChange}
              className="w-full h-8 bg-white rounded-md"
            />
            <div className="flex justify-between text-sm">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          {/* Phone Number (Optional) */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Phone No. <span className="text-sm text-gray-500">(Optional)</span>
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              className="w-full p-2 bg-white rounded-md border-2 border-gray-200"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">Description</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="w-full h-32 p-2 bg-red-50 rounded-md border-2 border-gray-200 resize-none"
              placeholder="Describe the animal's condition and location..."
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gray-300 hover:bg-gray-400 text-black font-bold rounded-md transition-colors uppercase"
          >
            ALERT NEARBY NGOs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportAnimalForm;