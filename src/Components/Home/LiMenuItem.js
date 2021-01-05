import React from "react";
import { NavLink } from "react-router-dom";

const LiMenuItem = (props) => {
  let { product } = props;
  return (
    <li className="menu-li li-border-bottom">
      <NavLink exact to="/">
        <img src={product.product_image} alt="abc" />
        <span>Dịch vụ tư vấn</span>
      </NavLink>
      <span>{product.product_price} ₫</span>
    </li>
  );
};

export default LiMenuItem;
