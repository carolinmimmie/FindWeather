import React, { useState } from "react";

interface SearchInputProps {
  handleSearch: (city: string) => void;
}

const SearchInput = ({ handleSearch }: SearchInputProps) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Tar bort mellanslag från strängen.
    if (city.trim()) {
      handleSearch(city.trim());
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-32">
      <h1 className="text-center text-2xl mb-4"> Find Weather</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-10">
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
