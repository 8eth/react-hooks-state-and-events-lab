import React, {useState} from "react";

function Item({ name, category }) {
  
  const [className, setClassName] = useState("")

  function handleAddToCart() {
    setClassName (className === "" ? "in-cart": "")
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{className === "" ? "Remove Form Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
