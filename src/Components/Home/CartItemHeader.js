import React from "react";
import { NavLink } from "react-router-dom";

const CartItemHeader = (props) => {
  let { productItem } = props;

  return (
    <ul className="menu-ul border-bottom mt-3">
      <li className="menu-li">
        <a className="image-product" href="#">
          <img src={productItem?.product.image} alt="abc" />
          <span> {productItem?.product.name} </span>
        </a>
        <span className="quantity-product">
          {productItem?.quantity} x{" "}
          <span className="amount">{productItem?.product.price}</span>
          <span className="currency ml-1">₫</span>
        </span>
      </li>
    </ul>
  );
};

export default CartItemHeader;
