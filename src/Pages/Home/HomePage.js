import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import ProductItem from "../../Components/Home/ProductItem";
import SectionCarousel from "../../Components/Home/SectionCarousel";
import { actionFetchProductsRequest } from "../../Redux/Actions/ProductAction";
import { ADD_PRODUCT_TO_CART } from "../../Redux/Types/ActionTypes";
import { CreateActionADD_UPDATE } from "../../Redux/Actions/CreateAction";
import Header from "../../Layouts/Header";

const HomePage = (props) => {
  let { products } = props;

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
  };

  let sellingProducts = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="col-3 col-item">
            <ProductItem
              key={index}
              product={product}
              index={index}
              onAddProductToCart={onAddProductToCart}
            />
          </div>
        );
      });
    }
    return result;
  };

  let showCategory = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onAddProductToCart={onAddProductToCart}
          />
        );
      });
    }
    return result;
  };
  return (
    <Fragment>
      {/* <Header /> */}
      {/* Carousel */}
      <SectionCarousel products={products} />
      {/* Banner */}
      <section className="banner">
        <div className="row">
          <div className="col-6">
            <div className="banner-item">
              <a href="#" className="banner-inner">
                <div className="item-inner">
                  <div className="item-bg">
                    <div className="bg">
                      <img src="./images/trend-1.jpg" alt="trend" />
                    </div>
                    <div className="overplay" />
                  </div>
                  <div className="item-layers">
                    <div className="text">
                      <div className="text-inner">
                        <h3>Xu hướng 2019</h3>
                        <div className="text-line" />
                        <h2 className="text-title">đồng hồ nam</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-item">
              <a href="#" className="banner-inner">
                <div className="item-inner">
                  <div className="item-bg">
                    <div className="bg">
                      <img src="./images/trend-2.jpg" alt="trend" />
                    </div>
                    <div className="overplay" />
                  </div>
                  <div className="item-layers">
                    <div className="text">
                      <div className="text-inner">
                        <h3>Xu hướng 2019</h3>
                        <div className="text-line" />
                        <h2 className="text-title">đồng hồ nữ</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sellingProducts">
        <div className="sellingProducts__content">
          <h2 className="categoryTitle">Sản phẩm bán chạy</h2>
          <div className="row listProduct">{sellingProducts(products)}</div>
        </div>
      </section>

      {/* Banner Info */}
      <section className="bannerInfo">
        <div className="bannerInfo__content">
          <div className="row">
            <div className="col-6 col-6-modifier">
              <div className="banner">
                <div className="banner-inner">
                  <div className="banner-bg">
                    <div className="bg">
                      <img src="./images/banner-03.jpg" alt="abc" />
                    </div>
                    <div className="overplay" />
                  </div>
                  <div className="banner-layers">
                    <div className="text-box">
                      <div className="text">
                        <div className="text-inner">
                          <h2>CỔ ĐIỂN</h2>
                          <h3>
                            Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-6-modifier">
              <div className="banner">
                <div className="banner-inner">
                  <div className="banner-bg">
                    <div className="bg">
                      <img src="./images/banner-03.jpg" alt="abc" />
                    </div>
                    <div className="overplay" />
                  </div>
                  <div className="banner-layers">
                    <div className="text-box">
                      <div className="text">
                        <div className="text-inner">
                          <h2>SMART WATCH</h2>
                          <h3>
                            Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="category">
        <div className="category__content">
          <ul className="nav nav--category" id="categoryTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="popular-tab"
                data-toggle="tab"
                href="#popular"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Sản phẩm phổ biến
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="promotional-tab"
                data-toggle="tab"
                href="#promotional"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Sản phẩm khuyến mãi
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-tab"
                data-toggle="tab"
                href="#new"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Sản phẩm mới
              </a>
            </li>
          </ul>
          <div
            className="tab-content tab-content--category"
            id="categoryTabContent"
          >
            <div
              className="tab-pane fade show active"
              id="popular"
              role="tabpanel"
              aria-labelledby="popular-tab"
            >
              <div className="category__container">
                {showCategory(products)}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="promotional"
              role="tabpanel"
              aria-labelledby="promotional-tab"
            >
              asdasdasd
            </div>
            <div
              className="tab-pane fade"
              id="new"
              role="tabpanel"
              aria-labelledby="new-tab"
            >
              asdasd
            </div>
          </div>
        </div>
      </section>

      {/* Post Special */}
      <section className="postSpecial">
        <div className="postSpecial__content">
          <div className="row">
            <div className="col-4 post-item">
              <a className="post-item-inner" href="#">
                <div className="box">
                  <div className="box-image">
                    <img src="./images/new-4.jpg" alt="abc" />
                  </div>
                  <div className="box-text">
                    <div className="box-text-inner">
                      <h5 className="post-title">
                        Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                      </h5>
                      <p className="post-description">
                        Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                        không chỉ là ...
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-4 post-item">
              <a className="post-item-inner" href="#">
                <div className="box">
                  <div className="box-image">
                    <img src="./images/new-4.jpg" alt="abc" />
                  </div>
                  <div className="box-text">
                    <div className="box-text-inner">
                      <h5 className="post-title">
                        Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                      </h5>
                      <p className="post-description">
                        Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                        không chỉ là ...
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-4 post-item">
              <a className="post-item-inner" href="#">
                <div className="box">
                  <div className="box-image">
                    <img src="./images/new-4.jpg" alt="abc" />
                  </div>
                  <div className="box-text">
                    <div className="box-text-inner">
                      <h5 className="post-title">
                        Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                      </h5>
                      <p className="post-description">
                        Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                        không chỉ là ...
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="information">
        <div className="information__content">
          <div className="row">
            <div className="col-6 col-left">
              <div className="left-inner">
                <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
              </div>
            </div>
            <div className="col-6 col-right">
              <div className="right-inner">
                <form action>
                  <input
                    className="item-input"
                    type="text"
                    placeholder="Email ..."
                  />
                  <button className="item-button" type="submit">
                    đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          <div className="row">
            <div className="col-3 col-3--modifier">
              <div className="col-inner col-contact">
                <h3>thông tin liên hệ</h3>
                <div className="contactInformation">
                  <div className="icon-box-image">
                    <i className="fa fa-map-marker-alt" />
                  </div>
                  <div className="icon-box-text">
                    <span>
                      319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                    </span>
                  </div>
                </div>
                <div className="contactInformation">
                  <div className="icon-box-image">
                    <i className="fas fa-phone-square-alt" />
                  </div>
                  <div className="icon-box-text">
                    <a href="tel:+076 922 0162">076 922 0162</a>
                  </div>
                </div>
                <div className="contactInformation">
                  <div className="icon-box-image">
                    <i className="fa fa-envelope-open-text" />
                  </div>
                  <div className="icon-box-text">
                    <a href="mailto:demonhunterg@gmail.com">
                      demonhunterg@gmail.com
                    </a>
                    <a href="mailto:mon@mona.media">mon@mona.media</a>
                  </div>
                </div>
                <div className="contactInformation">
                  <div className="icon-box-image">
                    <i className="fab fa-skype" />
                  </div>
                  <div className="icon-box-text">
                    <a href="http://abc.com">demonhunterp</a>
                  </div>
                </div>
                <div className="social">
                  <a href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href>
                    <i className="fa fa-rss" />
                  </a>
                  <a href>
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 col-3--modifier">
              <div className="col-inner col-link">
                <h3>liên kết</h3>
                <div className="link-inner">
                  <ul className="menu-link">
                    <li className="menu-item">
                      <a href>Giới thiệu</a>
                    </li>
                    <li className="menu-item">
                      <a href>Đồng hồ nam</a>
                    </li>
                    <li className="menu-item">
                      <a href>Đồng hồ nữ</a>
                    </li>
                    <li className="menu-item">
                      <a href>Blogs</a>
                    </li>
                    <li className="menu-item">
                      <a href>Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 col-3--modifier">
              <div className="col-inner col-support">
                <h3>hỗ trợ</h3>
                <div className="support-inner">
                  <ul className="menu-support">
                    <li className="menu-item">
                      <a href>Hướng dẫn mua hàng</a>
                    </li>
                    <li className="menu-item">
                      <a href>Hướng dẫn thanh toán</a>
                    </li>
                    <li className="menu-item">
                      <a href>Chính sách bảo hành</a>
                    </li>
                    <li className="menu-item">
                      <a href>Chính sách đổi trả</a>
                    </li>
                    <li className="menu-item">
                      <a href>Tư vấn khách hàng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 col-3--modifier">
              <div className="col-inner col-download-application">
                <h3>TẢI ỨNG DỤNG TRÊN</h3>
                <p>
                  Ứng dụng Mona Watch hiện có sẵn trên Google Play &amp; App
                  Store. Tải nó ngay.
                </p>
                <div className="application">
                  <a href>
                    <img src="./images/img-googleplay.jpg" alt="abc" />
                  </a>
                </div>
                <div className="application">
                  <a href>
                    <img src="./images/img-appstore.jpg" alt="abc" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(actionFetchProductsRequest());
    },
    onAddProductToCart: (product) => {
      dispatch(CreateActionADD_UPDATE(ADD_PRODUCT_TO_CART, product, 1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
