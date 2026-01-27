import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClick={() => onBuyButton(item)}
        />
      ))}
      {/* this is the map method */}
    </ul>
  );
};

export default FoodItems;
