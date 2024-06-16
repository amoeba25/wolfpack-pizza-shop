import { useState, useEffect } from "react";
import Customisation from "./Customisation";
import PriceCard from "./PriceCard";
import { prices } from "../priceList.js";

const Order = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState({
    size: "small",
    crust: "thick",
    ingredients: [],
  });

  // Calculating the price
  const calculatePrice = () => {
    const sizePrice = prices.size[selectedItems.size] || 0;
    const toppingPrice = selectedItems.ingredients.reduce(
      (accumulator, currentValue) => accumulator + prices.topping[currentValue],
      0
    );
    const crustPrice = prices.crust[selectedItems.crust] || 0;

    return sizePrice + toppingPrice + crustPrice;
  };

  useEffect(() => {
    setTotalPrice(calculatePrice());
  }, [selectedItems]);

  return (
    <div className="order">
      <Customisation
        prices={prices}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
      <PriceCard
        selectedItems={selectedItems}
        totalPrice={totalPrice}
        prices={prices}
      />
    </div>
  );
};

export default Order;
