import { useState } from "react";

const PriceCard = ({ selectedItems, totalPrice, prices }) => {
  const [submitState, setSubmitState] = useState("Add to cart");

  const handleSubmit = () => {
    setSubmitState("View Cart");
  };
  return (
    <div className="pricecard">
      <h2>Price</h2>

      <p>
        Size:{" "}
        {selectedItems.size &&
          `${selectedItems.size} ($${prices.size[selectedItems.size]})`}
      </p>

      <p>
        Crust:{" "}
        {selectedItems.crust &&
          `${selectedItems.crust} ($${prices.crust[selectedItems.crust]})`}
      </p>
      <ul>
        Toppings:
        {selectedItems.ingredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient} (${prices.topping[ingredient]})
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={handleSubmit}>{submitState}</button>
    </div>
  );
};

export default PriceCard;
