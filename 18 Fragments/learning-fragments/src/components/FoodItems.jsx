import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Items key={items} foodItems={items} handleBuyButtonClick={() => console.log(`${items} bought`)} />
      ))}
      {/* this is the map method */}
    </ul>
  );
};

export default FoodItems;
