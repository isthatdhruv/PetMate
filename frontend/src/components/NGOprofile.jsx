import { Star, Phone, Map } from 'lucide-react';

const NGOProfile = () => {
  // Sample data for the NGO profile
  const ngoData = {
    name: "Gau Raksha NGO",
    experience: "10 years",
    rating: 4.5,
    successfulRescues: 1152,
    description: "We are Gau Raksha NGO. We have established since 2021. We have 1152 successful rescues till now. If you need help feel free to contact us. We reply.",
    contactNumbers: ["5633116536534", "6551651651651166"],
    address: "N/866 plot no. 67, Knowledge Park-II, Greater Noida-110066",
    recentRescues: [
      "Successfully rescued an injured cow from a roadside accident.",
      "Provided medical care to a group of abandoned calves."
    ]
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 shadow-lg">
      {/* Header */}
      <div className="bg-gray-200 p-3">
        <h1 className="text-xl font-bold">NGO Profile</h1>
      </div>

      {/* Profile Content */}
      <div className="flex flex-col">
        {/* Main Profile Section */}
        <div className="flex">
          {/* Left Column - Image and Info */}
          <div className="w-1/2 p-4 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-3">
              <img 
                src="/api/placeholder/200/200" 
                alt="Gau Raksha NGO" 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-bold text-center">{ngoData.name}</h2>
            <div className="w-full mt-2">
              <div className="flex justify-between text-sm">
                <span>Experience :</span>
                <span>{ngoData.experience}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Rating :</span>
                <div className="flex items-center">
                  <span>{ngoData.rating}</span>
                  <Star size={16} className="text-yellow-500 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span>Successful Rescue :</span>
                <span>{ngoData.successfulRescues}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Description and Contact */}
          <div className="w-1/2 bg-red-100 p-4">
            <div className="mb-4">
              <h3 className="font-bold mb-2">Description :</h3>
              <p className="text-sm">{ngoData.description}</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Contact Details :</h3>
              {ngoData.contactNumbers.map((number, index) => (
                <div key={index} className="flex items-center text-sm mb-1">
                  <Phone size={14} className="mr-1" />
                  <span>{number}</span>
                </div>
              ))}
              <div className="mt-2">
                <h4 className="font-bold text-sm mb-1">Address :</h4>
                <div className="flex items-start text-sm">
                  <Map size={14} className="mr-1 mt-1 flex-shrink-0" />
                  <span>{ngoData.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Rescues Section */}
        <div className="bg-blue-100 p-4">
          <h3 className="font-bold mb-3">Recent Rescue :</h3>
          <div className="space-y-3">
            {ngoData.recentRescues.map((rescue, index) => (
              <div key={index} className="bg-red-100 p-3 rounded-md text-sm">
                {rescue}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOProfile;