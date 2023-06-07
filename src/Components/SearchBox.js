import React from 'react';

const SearchBox = (props) => {
  // Extracting props for readability
  const { searchValue, setSearchValue } = props;

  return (
    <div className="col col-sm-4">
      {/* Input field for search */}
      <input
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)} // Call setSearchValue when input value changes
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
