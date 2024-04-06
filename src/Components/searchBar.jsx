import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usersData from "../backend/data/users.mjs";
import { Link } from "react-router-dom";

function SearchBar({ onSearch }) {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (event) => {
    const data = event.target.value;
    setSearchData(data);
    if (data === "") {
      setSearchResults([]);
      setIsRegistered(false);
    } else {
      const results = usersData.filter((user) => user.name === data);
      if (results.length === 1) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
      setSearchResults(results);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistered) {
      navigate(`/user/${searchData}`);
    }
  };

  return (
    <div className="relative">
      <form
        className="mt-5 flex items-center w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search User"
          value={searchData}
          onChange={handleChange}
          className="border border-gray-400 rounded-md py-2 px-4 w-full"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white py-2 px-4"
        >
          <FaSearch />
        </button>
      </form>
      <div className="absolute top-full left-0 w-full max-w-md mt-2">
        <div className="bg-white rounded-md">
          {searchResults.map((user) => (
            <div
              key={user.name}
              className="py-2 px-4 border-gray-300 flex justify-between items-center hover:bg-[#e0e0e0] cursor-pointer"
            >
              <p>{user.name}</p>
              {isRegistered && (
                <Link to={{ pathname: `/user/${user.name}` }}>
                  <span className="text-red-500 ml-2">Registered</span>
                </Link>
              )}
            </div>
          ))}
          {!isRegistered && searchData && (
            <div className="py-2 px-4 border-gray-300 flex justify-between items-center hover:bg-[#e0e0e0] cursor-pointer">
              <p>{searchData}</p>
              <Link to={`/register/${searchData}`}>
                <span className="text-green-500 ml-2">Available</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
