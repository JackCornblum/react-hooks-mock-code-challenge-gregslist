import React, {useState} from "react";

function ListingCard({description, img, location, handleDelete, id}) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick(){
    let updateFavorited = !isFavorited
    setIsFavorited(updateFavorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
