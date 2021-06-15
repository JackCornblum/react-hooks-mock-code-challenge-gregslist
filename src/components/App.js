import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingItems, setListingItems] = useState([])
  const [reload, setReload] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => {
      return setListingItems(data)
    })
    console.log(listingItems)
  }, [reload])

  function handleDelete(e){
    let id = e.target.id

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    setReload(!reload)
  }

  function filterCards(parameter) {
    setListingItems(
      listingItems.filter((items) => {
        return items.description.toLowerCase().includes(searchValue.toLowerCase())
      })
    )
    
  }
  
  
  return (
    <div className="app">
      <Header 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        filterCards = {filterCards}
      />
      <ListingsContainer 
        listingItems={listingItems} 
        setListingItems={setListingItems}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
