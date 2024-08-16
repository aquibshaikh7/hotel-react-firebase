// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const Cart = () => {
//   const location = useLocation();
//   const { cartItems: initialCartItems } = location.state || { cartItems: [] };
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const increaseQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index].quantity += 1;
//     setCartItems(newCartItems);
//   };

//   const decreaseQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     if (newCartItems[index].quantity > 1) {
//       newCartItems[index].quantity -= 1;
//       setCartItems(newCartItems);
//     }
//   };

//   const removeItem = (index) => {
//     const newCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(newCartItems);
//   };

//   const handlePayment = () => {
//     // Implement payment logic here
//     alert("Proceeding to payment...");
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <p>
//               {item.name}: {item.quantity}
//             </p>
//             <button onClick={() => increaseQuantity(index)}>+</button>
//             <button onClick={() => decreaseQuantity(index)}>-</button>
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//       {cartItems.length > 0 && <button onClick={handlePayment}>Pay</button>}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>
              {item.name}: {item.quantity}
            </p>
            {/* Implement quantity update and remove functionality */}
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
