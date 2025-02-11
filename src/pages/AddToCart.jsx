import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./addtocart.css";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/736x/9d/58/69/9d5869c8da0c96f314fd695aa3c25cb8.jpg",
      title: "Elegant Women's Dress",
      price: 82,
      quantity: 2,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/26/fa/66/26fa6688c304630336039d65db4220f3.jpg",
      title: "Casual Summer Outfit",
      price: 72,
      quantity: 1,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/65/07/29/6507290467d8fc52954f23fce1747662.jpg",
      title: "Stylish Denim Jacket",
      price: 65,
      quantity: 1,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/2e/a0/49/2ea049b6749031e6d9d8400345e4bd30.jpg",
      title: "Trendy Winter Coat",
      price: 90,
      quantity: 1,
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/64/df/dc/64dfdc282fecd1d6d5e80d9a5827572f.jpg",
      title: "Chic Office Wear",
      price: 85,
      quantity: 2,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.title} width={100} height={100} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  <CloseIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-summary">
        <h3>Final Total</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Total Amount:</strong></td>
              <td>${totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToCart;
