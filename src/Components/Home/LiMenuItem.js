import React from "react";
import { NavLink } from "react-router-dom";

const LiMenuItem = (props) => {
  let { product } = props;

  // let renderImageProduct = (product) => {
  //   let result;
  //   result = product.images.map((image) => {
  //     return image.link;
  //   });
  //   return result;
  // };

  return (
    <li className="menu-li li-border-bottom">
      <NavLink exact to="/">
        {/* <img src={renderImageProduct(product)} alt="abc" /> */}
        <img src="https://www.dangquangwatch.vn/upload/product/154172738_%C4%91%C3%B2ng-h%E1%BB%93-ch%C3%ADnh-h%C3%A3ng-22.jpg" alt="product" />
        <span>Dịch vụ tư vấn</span>
      </NavLink>
      <span>{product.price} ₫</span>
    </li>
  );
};

export default LiMenuItem;
