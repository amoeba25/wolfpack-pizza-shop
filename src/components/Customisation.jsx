const Customisation = ({ prices, selectedItems, setSelectedItems }) => {
  // current selections

  const handleSizeChange = (size) => {
    setSelectedItems({ ...selectedItems, size });
  };

  const handleCrustChange = (crust) => {
    setSelectedItems({ ...selectedItems, crust });
  };
  // checkbox state update
  const handleIngredientChange = (event) => {
    const { value, checked } = event.target;
    const newIngredients = checked
      ? selectedItems.ingredients.length < 5
        ? [...selectedItems.ingredients, value]
        : [...selectedItems.ingredients]
      : selectedItems.ingredients.filter((topping) => topping !== value);
    setSelectedItems({ ...selectedItems, ingredients: newIngredients });
  };

  return (
    <div className="customised-layout">
      <div className="all-card">
        <div className="size-card card">
          <h3 className="custom-title">Size</h3>
          {Object.keys(prices.size).map((size) => (
            <label key={size} className="radio-label">
              {size} (${prices.size[size]})
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedItems.size === size}
                onChange={() => handleSizeChange(size)}
                className="radio-input"
              />
            </label>
          ))}
        </div>

        <div className="size-card card">
          <h3 className="custom-title">Crust</h3>
          {Object.keys(prices.crust).map((crust) => (
            <label key={crust} className="radio-label">
              {crust} (${prices.crust[crust]})
              <input
                type="radio"
                name="crust"
                value={crust}
                checked={selectedItems.crust === crust}
                onChange={() => handleCrustChange(crust)}
                className="radio-input"
              />
            </label>
          ))}
        </div>

        <div className="topping-card card">
          <h3 className="custom-title">
            Toppings [{selectedItems.ingredients.length}/5]{" "}
          </h3>
          <div className="topping-data">
            {Object.keys(prices.topping).map((topping) => (
              <label key={topping} className="checkbox-label">
                <input
                  type="checkbox"
                  name="size"
                  value={topping}
                  checked={selectedItems.ingredients.includes(topping)}
                  onChange={handleIngredientChange}
                  className="checkbox-input"
                />
                {topping} (${prices.topping[topping]})
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customisation;
