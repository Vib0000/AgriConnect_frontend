import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const cropData = [
  {
    name: 'Sugarcane',
    image: 'https://cdn.britannica.com/23/126823-050-820B0A1F/Field-sugarcane-St-George-Parish-Barbados.jpg',
    landArea: '1 acre',
    seedRequired: '1 kg',
    waterPerMonth: '3000 liters',
    fertilizerQty: '50 kg',
    pesticides: '5 liters',
    otherDetails: 'Additional information about Sugarcane',
  },
  {
    name: 'Wheat',
    image: 'https://th.bing.com/th/id/OIP.6iaLrjvK1xo_KuSAyN6jMgHaEo?rs=1&pid=ImgDetMain',
    landArea: '2 acres',
    seedRequired: '100 kg',
    waterPerMonth: '2000 liters',
    fertilizerQty: '30 kg',
    pesticides: '3 liters',
    otherDetails: 'Additional information about Wheat',
  },
  // More crops...
];

export const CropDetail = () => {
  const [input, setInput] = useState('');
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const filteredSuggestions = cropData.filter(crop =>
        crop.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion.name);
    setSelectedCrop(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    const crop = cropData.find(crop => crop.name.toLowerCase() === input.toLowerCase());
    setSelectedCrop(crop);
  };

  return (
    <div className="container mx-auto p-4 pt-16 mt-36">
      <div className="mb-6 relative">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter crop name"
          className="border rounded p-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600"
        >
          Search
        </button>
        {suggestions.length > 0 && (
          <div className="absolute bg-white border rounded w-full md:w-1/2 mt-1 shadow-lg z-10">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-300 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedCrop && (
  <div className="bg-gray-100 p-6 rounded shadow-lg flex flex-col md:flex-row items-start md:items-start">
    <div className="flex-1 md:mr-6 bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{selectedCrop.name}</h2>
      <div className="space-y-2">
        {[
          { label: "Land Area", value: selectedCrop.landArea },
          { label: "Seed Required", value: selectedCrop.seedRequired },
          { label: "Water Per Month", value: selectedCrop.waterPerMonth },
          { label: "Fertilizer Quantity", value: selectedCrop.fertilizerQty },
          { label: "Pesticides", value: selectedCrop.pesticides },
          { label: "Other Details", value: selectedCrop.otherDetails }
        ].map((item, index) => (
          <div key={index} className="flex mb-2">
            <div className="w-1/3 p-2 bg-blue-100 rounded-l border-r border-gray-200 text-gray-700 font-semibold">
              {item.label}:
            </div>
            <div className="w-2/3 p-2 bg-white rounded-r border border-gray-200 text-gray-800">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
      <img
        src={selectedCrop.image}
        alt={selectedCrop.name}
        className="w-full h-auto rounded shadow-lg"
      />
    </div>
  </div>
)}




    </div>
  );
};
