import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 flex-grow py-2  border-slate-200 border  rounded-l-md focus:outline-none focus:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-200 text-white px-4 py-2 rounded-r-md hover:bg-slate-100"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default Search;
