import React from "react";
import Search from "./Search";

function Header({searchValue, setSearchValue, filterCards}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        filterCards={filterCards}
      />
    </header>
  );
}

export default Header;
