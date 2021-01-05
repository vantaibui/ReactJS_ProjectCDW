import React from "react";
import { connect } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import FormSearch from "../Components/FormSearch";
import CartItemHeader from "../Components/Home/CartItemHeader";

const Menus = [
  { label: "Trang chủ", to: "/", exact: true },
  { label: "giới thiệu", to: "/information", exact: false },
  { label: "đồng hồ nam", to: "/category", exact: false },
  { label: "đồng hồ nữ", to: "/categorynu", exact: false },
  { label: "blogs", to: "/blogs", exact: false },
  { label: "liên hệ", to: "/contact", exact: false },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <NavLink to={to} exact={activeOnlyWhenExact} className="nav-link">
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};

const Header = (props) => {
  let { cartList } = props;

  let renderCartItem = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((productItem, index) => {
        return (
          <CartItemHeader key={index} productItem={productItem} index={index} />
        );
      });
    }
    return result;
  };

  let showProductSubTotal = (products) => {
    let total = 0;
    if (products.length > 0) {
      let result = products.map((product) => {
        return parseFloat(product.product.product_price) * product?.quantity;
      });
      for (const iterator of result) {
        total += iterator;
      }
    }
    return total;
  };

  let showMenus = (Menus) => {
    let result;
    if (Menus.length > 0) {
      result = Menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            exact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  return (
    <header className="header">
      <div className="headerLocation">
        <div className="row headerLocation__content">
          <div className="col-8 location">
            <div className="location__content">
              <i className="fa fa-map-marker-alt" />
              <span>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</span>
            </div>
            <div className="contact__content">
              <i className="fas fa-phone-alt" />
              <a href="tel: +0968367953">076 922 0162</a>
            </div>
          </div>
          <div className="col-4 icon">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
          </div>
        </div>
      </div>
      <div className="headerLogo">
        <div className="row row--modifier headerLogo__content">
          <div className="col-3 col--modifier searchLeft">
            <NavLink exact to="/">
              <img className="logo" src="./images/logo-mona.png" alt="logo" />
            </NavLink>
          </div>
          <div className="col-7 col--modifier searchCenter">
            <FormSearch />
          </div>
          <div className="col-2 col--modifier searchRight">
            <div className="menu-searchRight">
              <ul className="menu-ul">
                <li className="menu-li">
                  <a href="#">
                    <i className="fa fa-heart heart--modifier" />
                  </a>
                </li>
                <li className="menu-li menu-li-cart-description">
                  <NavLink exact to="/cart">
                    <i className="fa fa-cart-plus cart--modifier" />{" "}
                  </NavLink>

                  <div className="menu-cart-description">
                    {renderCartItem(cartList)}
                    <p className="total-cart-description border-bottom">
                      <strong>Tổng phụ:</strong>
                      <span className="amount ml-1">
                        {showProductSubTotal(cartList)}
                        <span className="ml-1">₫</span>
                      </span>
                    </p>
                    <p className="button-cart-desciption">
                      <NavLink
                        exact
                        to="/cart"
                        className="button button-view-cart"
                      >
                        Xem giỏ hàng
                      </NavLink>
                      <NavLink
                        exact
                        to="/payment"
                        className="button button-pay"
                      >
                        Thanh toán
                      </NavLink>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="headerMenu">
        <nav className="navbar navbar-expand-lg navbarMenu">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse navbarContent"
            id="navbarNav"
          >
            <ul className="navbar-nav">{showMenus(Menus)}</ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.CartReducer,
  };
};

export default connect(mapStateToProps, null)(Header);
