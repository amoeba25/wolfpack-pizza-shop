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
      ? [...selectedItems.ingredients, value]
      : selectedItems.ingredients.filter((topping) => topping !== value);
    setSelectedItems({ ...selectedItems, ingredients: newIngredients });
  };

  return (
    <div className="customised-layout">
      <div className="size-card">
        <h3>Choose your size</h3>
        {Object.keys(prices.size).map((size) => (
          <label key={size}>
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedItems.size === size}
              onChange={() => handleSizeChange(size)}
            />
            {size} (${prices.size[size]})
          </label>
        ))}
      </div>

      <div className="size-card">
        <h3>Choose your crust</h3>
        {Object.keys(prices.crust).map((crust) => (
          <label key={crust}>
            <input
              type="radio"
              name="crust"
              value={crust}
              checked={selectedItems.crust === crust}
              onChange={() => handleCrustChange(crust)}
            />
            {crust} (${prices.crust[crust]})
          </label>
        ))}
      </div>

      <div className="topping-card">
        <h3>Choose your topping</h3>
        {Object.keys(prices.topping).map((topping) => (
          <label key={topping}>
            <input
              type="checkbox"
              name="size"
              value={topping}
              checked={selectedItems.ingredients.includes(topping)}
              onChange={handleIngredientChange}
            />
            {topping} (${prices.topping[topping]})
          </label>
        ))}
      </div>
    </div>
  );
};

export default Customisation;
