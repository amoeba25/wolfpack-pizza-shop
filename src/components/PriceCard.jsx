import { useState } from "react";

const PriceCard = ({ selectedItems, totalPrice, prices }) => {
  return (
    <div className="pricecard">
      <h2>Price</h2>

      <p className="price-title">
        Size:{" "}
        {selectedItems.size &&
          `${selectedItems.size} ($${prices.size[selectedItems.size]})`}
      </p>

      <p className="price-title">
        Crust:{" "}
        {selectedItems.crust &&
          `${selectedItems.crust} ($${prices.crust[selectedItems.crust]})`}
      </p>
      <ul className="price-title price-topping-list">
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
