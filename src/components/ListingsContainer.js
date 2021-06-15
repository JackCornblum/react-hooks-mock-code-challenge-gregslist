import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingItems, setListingItems, handleDelete}) {
  // console.log(listingItems)
  let listItems = listingItems.map(obj => {
    return <ListingCard id={obj.id} handleDelete={handleDelete} description={obj.description} img={obj.image} location={obj.location} key={obj.id} />
  })

  return (
    <main>
      <ul className="cards">
        {listItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
