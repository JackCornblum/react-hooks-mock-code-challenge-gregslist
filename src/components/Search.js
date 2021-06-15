import React from "react";

function Search({searchValue, setSearchValue, filterCards}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(e.target[0].value)
    filterCards()
  }

  function handleChange(e) {
    setSearchValue(e.target.value)
    filterCards()
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
