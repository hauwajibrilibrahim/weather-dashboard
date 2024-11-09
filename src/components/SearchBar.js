import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      console.log("Searching for location:", location); 
      onSearch(location);
    } else {
      console.log("Location input is empty."); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
