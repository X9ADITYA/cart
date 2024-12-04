import React from "react";

function CartItem({ item, dispatch }) {
  return (
    <div style={styles.cartItem}>
      <span style={styles.itemName}>{item.name}</span>
      <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
      <button
        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
        style={styles.removeButton}
      >
        ❌ Remove
      </button>
    </div>
  );
}

const styles = {
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  itemName: {
    fontSize: "1.2rem",
    color: "#333",
  },
  itemPrice: {
    fontSize: "1.2rem",
    color: "#007bff",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default CartItem;
