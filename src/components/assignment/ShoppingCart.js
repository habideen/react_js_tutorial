import React, { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      const updatedItems = [...state.items, action.item];
      const updatedAmount = state.totalAmount + action.item.price;
      return { items: updatedItems, totalAmount: updatedAmount };
    case "delete_item":
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const decreasedAmount = state.totalAmount - action.price;
      return { items: filteredItems, totalAmount: decreasedAmount };
    default:
      return state;
  }
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "add_item", item });
  };

  const removeItem = (id, price) => {
    dispatch({ type: "delete_item", id, price });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <button
          onClick={() => addItem({ id: 1, name: "Product 1", price: 50 })}
        >
          Add Product 1 ($50)
        </button>
        <button
          onClick={() => addItem({ id: 2, name: "Product 2", price: 30 })}
        >
          Add Product 2 ($30)
        </button>
      </div>
      <h3>Items:</h3>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id, item.price)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${state.totalAmount}</p>
    </div>
  );
}

export default ShoppingCart;
