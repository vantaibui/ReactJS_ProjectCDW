import React from "react";
import { NavLink } from "react-router-dom";

const LiMenuItem = (props) => {
  let { product } = props;

  let renderImageProduct = (product) => {
    let result;
    result = product.images.map((image) => {
      return image.link;
    });
    return result;
  };

  return (
    <li className="menu-li li-border-bottom">
      <NavLink exact to="/">
        <img src={renderImageProduct(product)} alt="abc" />
        <span>Dịch vụ tư vấn</span>
      </NavLink>
      <span>{product.price} ₫</span>
    </li>
  );
};

export default LiMenuItem;
