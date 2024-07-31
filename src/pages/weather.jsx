import React, { useState } from "react";

// Hardcoded data for states, cities, and villages
const statesData = {
  Maharashtra: {
    Mumbai: ["Andheri", "Bandra", "Dadar"],
    Pune: ["Kothrud", "Hadapsar", "Viman Nagar"],
  },
  Karnataka: {
    Bengaluru: ["Koramangala", "Whitefield", "HSR Layout"],
    Mysuru: ["Vani Vilas", "Hebbal", "Jayalakshmipuram"],
  },
};

const weatherData = {
  Maharashtra: {
    Mumbai: {
      Andheri: {
        temp: "30°C",
        rain: "10%",
        humidity: "70%",
        wind: "15 km/h",
        moisture: "High",
      },
      Bandra: {
        temp: "32°C",
        rain: "15%",
        humidity: "65%",
        wind: "20 km/h",
        moisture: "Medium",
      },
    },
    Pune: {
      Kothrud: {
        temp: "28°C",
        rain: "5%",
        humidity: "60%",
        wind: "10 km/h",
        moisture: "Low",
      },
    },
  },
  Karnataka: {
    Bengaluru: {
      Koramangala: {
        temp: "25°C",
        rain: "2%",
        humidity: "50%",
        wind: "12 km/h",
        moisture: "Low",
      },
    },
  },
};

export const WeatherDetail = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [village, setVillage] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    if (state && city && village) {
      const weatherInfo = weatherData[state]?.[city]?.[village];
      setWeather(weatherInfo);
    } else {
      setWeather(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-2">
      <h1 className="text-2xl font-bold mb-4">Weather Details for Farming</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">State:</label>
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
            setVillage("");
          }}
          className="block w-full p-2 border rounded"
        >
          <option value="">Select a state</option>
          {Object.keys(statesData).map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      {state && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            City/District:
          </label>
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setVillage("");
            }}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select a city/district</option>
            {Object.keys(statesData[state]).map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </div>
      )}

      {city && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Village:</label>
          <select
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select a village</option>
            {statesData[state][city].map((villageName) => (
              <option key={villageName} value={villageName}>
                {villageName}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {weather && (
        <div className="mt-4 flex justify-between">
          {/* Left Side: Basic Weather Info */}
          <div className="bg-gray-200 p-4 border rounded w-1/2 mr-2">
            <h2 className="text-xl font-bold mb-2">Basic Weather Info:</h2>
            <div className="mb-2 p-2 bg-white border rounded  ">
              <div>
                <strong>Temperature:</strong>
              </div>
              <div>{weather.temp}</div>
            </div>
            <div className="mb-2 p-2 bg-white border rounded ">
              <div>
                <strong>Rain Chances:</strong>
              </div>
              <div> {weather.rain}</div>
            </div>
            <div className="mb-2 p-2 bg-white border rounded ">
              <div>
                <strong>Wind:</strong>
              </div>
              <div> {weather.wind}</div>
            </div>
          </div>

          {/* Right Side: Additional Details */}
          <div className="bg-gray-300 p-4 border rounded w-1/2 ml-2">
            <h2 className="text-xl font-bold mb-2">Additional Details:</h2>
            <div className="mb-2 p-2 bg-white border rounded ">
              <div>
                <strong>Humidity:</strong>
              </div>
              <div>{weather.humidity} </div>
            </div>
            <div className="mb-2 p-2 bg-white border rounded ">
              <div>
                <strong>Moisture:</strong>
              </div>
              <div> {weather.moisture} </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
