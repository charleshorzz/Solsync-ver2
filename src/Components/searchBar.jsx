import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="mt-5 flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search User"
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-400 rounded-md py-2 px-4 w-full max-w-md"
      />
      <button type="submit" className="text-white py-2 px-4">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
