import React, { useReducer } from "react";
import CartItem from "./CartItem";
import reducer, { initialState } from "./reducer";

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: state.cart.length + 1,
        name: "Product " + (state.cart.length + 1),
        price: 10 + state.cart.length * 2, // Different price for each item
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Shopping Cart</h1>

      <div style={styles.buttonContainer}>
        <button onClick={addItemToCart} style={styles.addButton}>
          ➕ Add Item
        </button>
        <button onClick={clearCart} style={styles.clearButton}>
          🗑️ Clear Cart
        </button>
      </div>

      <h2>Your Cart</h2>
      {state.cart.length === 0 ? (
        <p style={styles.emptyCartMessage}>The cart is empty.</p>
      ) : (
        state.cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))
      )}

      <h3 style={styles.total}>Total: ${state.total.toFixed(2)}</h3>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  clearButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  emptyCartMessage: {
    fontSize: "1.2rem",
    color: "#666",
  },
  total: {
    fontSize: "1.5rem",
    color: "#333",
    marginTop: "20px",
  },
};

export default Cart;
