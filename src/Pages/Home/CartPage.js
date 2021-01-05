import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../../Components/Home/CartItem";
import CartResult from "../../Components/Home/CartResult";
import Header from "../../Layouts/Header";
import {
  CreateAction,
  CreateActionADD_UPDATE,
} from "../../Redux/Actions/CreateAction";
import {
  DELETE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../../Redux/Types/ActionTypes";

const Cart = (props) => {
  let { cartList } = props;

  let onDeleteProductInCart = (id) => {
    props.onDeleteProductInCart(id);
  };

  let onUpdateProductInCart = (product, quantity) => {
    props.onUpdateProductInCart(product, quantity);
  };

  let renderCartItem = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((productItem, index) => {
        return (
          <CartItem
            key={index}
            productItem={productItem}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };

  let renderCartResult = () => {
    return <CartResult products={cartList} />;
  };

  return (
    <section className="viewCart">
      <div className="viewCart__content">
        <div className="row row--modifier">
          <div className="col-7 col--modifier col--border">
            <div className="product-list">
              <table className="table-product">
                <thead>
                  <tr>
                    <th colSpan={3}>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>{renderCartItem(cartList)}</tbody>
              </table>
              <div className="btn-cart">
                <div className="btn-cart__content">
                  <NavLink exact to="/">
                    ← Tiếp tục xem sản phẩm
                  </NavLink>
                  <button className="update-cart">Cập nhật giỏ hàng</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 col--modifier">
            <div className="form-pay">
              <div className="cart-totals">
                <p>Tổng số lượng</p>
                {renderCartResult()}
                <div className="procced-with-payment">
                  <NavLink exact to="/payment" className="btn-payment">
                    {" "}
                    Tiến hành thanh toán
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProductInCart: (id) => {
      dispatch(CreateAction(DELETE_PRODUCT_IN_CART, id));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(
        CreateActionADD_UPDATE(UPDATE_PRODUCT_IN_CART, product, quantity)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
