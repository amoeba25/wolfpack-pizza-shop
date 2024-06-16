import React from "react";

const PriceCard = ({ selectedItems, totalPrice, prices }) => {
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
    </div>
  );
};

export default PriceCard;
