import React from "react";
import { NavLink } from "react-router-dom";

const CartItemHeader = (props) => {
  let { productItem } = props;

  let showProductSubTotal = (product_price, quantity) => {
    let result = parseFloat(product_price) * quantity;
    return result;
  };

  return (
    <div className="menu-cart-description">
      <ul className="menu-ul border-bottom">
        <li className="menu-li">
          <a className="image-product" href>
            <img src={productItem?.product.product_image} alt="abc" />
            <span> {productItem?.product.product_name} </span>
          </a>
          <span className="quantity-product">
            {productItem?.quantity} x{" "}
            <span className="amount">{productItem?.product.product_price}</span>
            <span className="currency">₫</span>
          </span>
        </li>
      </ul>
      <p className="total-cart-description border-bottom">
        <strong>Tổng phụ:</strong>
        <span className="amount ml-1">
          {showProductSubTotal(
            productItem?.product.product_price,
            productItem?.quantity
          )}
          <span className="ml-1">₫</span>
        </span>
      </p>
      <p className="button-cart-desciption">
        <NavLink exact to="/cart" className="button button-view-cart">
          Xem giỏ hàng
        </NavLink>
        <NavLink exact to="/payment" className="button button-pay">
          Thanh toán
        </NavLink>
      </p>
    </div>
  );
};

export default CartItemHeader;
