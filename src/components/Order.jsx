import { useState, useEffect } from "react";
import Customisation from "./Customisation";
import PriceCard from "./PriceCard";
import { prices } from "../priceList.js";

const Order = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [submitState, setSubmitState] = useState("Add to cart");
  const [colour, setSubmitColour] = useState("#E4866B");
  const [selectedItems, setSelectedItems] = useState({
    size: "small",
    crust: "thick",
    ingredients: [],
  });
  const handleSubmit = () => {
    setSubmitState("View Cart");
    setSubmitColour("green");
  };

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
      <div className="title">
        <p className="pizza-title">Veg Farmhouse Pizza</p>
        <h2 className="pizza-subtitle">Customise as per your taste</h2>
      </div>
      <div className="content">
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
      <div className="button">
        <button
          className="submit-btn"
          onClick={handleSubmit}
          style={{ backgroundColor: colour }}
        >
          {submitState}
        </button>
      </div>
    </div>
  );
};

export default Order;
