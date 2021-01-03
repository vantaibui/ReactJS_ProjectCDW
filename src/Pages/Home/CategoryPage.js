import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const CategoryPage = (props) => {
  return (
    <Fragment>
      {/* Menu Category Page */}
      <section className="menuCategory">
        <div className="menuCategory__content">
          <div className="row row--modifier">
            <div className="col-7 col--modifier">
              <nav className="navbar navbar-expand-lg navbar--modifier">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/" exact>
                        Trang chủ
                      </NavLink>
                    </li>
                    <span className="divider">/</span>Đồng hồ nam
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-5 col--modifier">
              <div className="col-right-content">
                <p>Hiển thị một kết quả duy nhất</p>
                <form className="right-form">
                  <select className="select-form">
                    <option>Thứ tự mặc định</option>
                    <option value="popularity">
                      Thứ tự theo mức độ phổ biến
                    </option>
                    <option value="rating">Thứ tự theo điểm đánh giá</option>
                    <option value="date">Mới nhất</option>
                    <option value="price">Thứ tự theo giá: thấp đến cao</option>
                    <option value="price-desc">
                      Thứ tự theo giá: cao xuống thấp
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
