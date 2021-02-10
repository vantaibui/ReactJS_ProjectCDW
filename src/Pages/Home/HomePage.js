import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../../Components/Home/ProductItem";
import SectionCarousel from "../../Components/Home/SectionCarousel";
import { actionFetchProductsRequest } from "../../Redux/Actions/ProductAction";
import { ADD_PRODUCT_TO_CART } from "../../Redux/Types/ActionTypes";
import { CreateActionADD_UPDATE } from "../../Redux/Actions/CreateAction";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

const HomePage = (props) => {
    let { products } = props;

    useEffect(() => {
        props.fetchAllProducts();
    }, []);

    let setting = {
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    let onAddProductToCart = (product) => {
        props.onAddProductToCart(product);
    };

    let sellingProducts = (products) => {
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <div key={index} className="col-item">
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
        <>
            <Header />
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
                                            <img
                                                src="./images/trend-1.jpg"
                                                alt="trend"
                                            />
                                        </div>
                                        <div className="overplay" />
                                    </div>
                                    <div className="item-layers">
                                        <div className="text">
                                            <div className="text-inner">
                                                <h3>Xu hướng 2019</h3>
                                                <div className="text-line" />
                                                <h2 className="text-title">
                                                    đồng hồ nam
                                                </h2>
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
                                            <img
                                                src="./images/trend-2.jpg"
                                                alt="trend"
                                            />
                                        </div>
                                        <div className="overplay" />
                                    </div>
                                    <div className="item-layers">
                                        <div className="text">
                                            <div className="text-inner">
                                                <h3>Xu hướng 2019</h3>
                                                <div className="text-line" />
                                                <h2 className="text-title">
                                                    đồng hồ nữ
                                                </h2>
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
                    {/* <div className="row listProduct listProduct-slick-slider">
                        {sellingProducts(products)}
                    </div> */}
                    <Slider {...setting}>{sellingProducts(products)}</Slider>
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
                                            <img
                                                src="./images/banner-03.jpg"
                                                alt="abc"
                                            />
                                        </div>
                                        <div className="overplay" />
                                    </div>
                                    <div className="banner-layers">
                                        <div className="text-box">
                                            <div className="text">
                                                <div className="text-inner">
                                                    <h2>CỔ ĐIỂN</h2>
                                                    <h3>
                                                        Đa dạng về phong cách,
                                                        kiểu dáng, màu sắc, kích
                                                        cỡ…
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
                                            <img
                                                src="./images/banner-03.jpg"
                                                alt="abc"
                                            />
                                        </div>
                                        <div className="overplay" />
                                    </div>
                                    <div className="banner-layers">
                                        <div className="text-box">
                                            <div className="text">
                                                <div className="text-inner">
                                                    <h2>SMART WATCH</h2>
                                                    <h3>
                                                        Đa dạng về phong cách,
                                                        kiểu dáng, màu sắc, kích
                                                        cỡ…
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
                    <ul
                        className="nav nav--category"
                        id="categoryTab"
                        role="tablist"
                    >
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
                                        <img
                                            src="./images/new-4.jpg"
                                            alt="abc"
                                        />
                                    </div>
                                    <div className="box-text">
                                        <div className="box-text-inner">
                                            <h5 className="post-title">
                                                Chiếc đồng hồ của những CEO
                                                quyền lực nhất thế giới
                                            </h5>
                                            <p className="post-description">
                                                Đối với một số doanh nhân, một
                                                chiếc đồng hồ đeo tay không chỉ
                                                là ...
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
                                        <img
                                            src="./images/new-4.jpg"
                                            alt="abc"
                                        />
                                    </div>
                                    <div className="box-text">
                                        <div className="box-text-inner">
                                            <h5 className="post-title">
                                                Chiếc đồng hồ của những CEO
                                                quyền lực nhất thế giới
                                            </h5>
                                            <p className="post-description">
                                                Đối với một số doanh nhân, một
                                                chiếc đồng hồ đeo tay không chỉ
                                                là ...
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
                                        <img
                                            src="./images/new-4.jpg"
                                            alt="abc"
                                        />
                                    </div>
                                    <div className="box-text">
                                        <div className="box-text-inner">
                                            <h5 className="post-title">
                                                Chiếc đồng hồ của những CEO
                                                quyền lực nhất thế giới
                                            </h5>
                                            <p className="post-description">
                                                Đối với một số doanh nhân, một
                                                chiếc đồng hồ đeo tay không chỉ
                                                là ...
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
                                    <button
                                        className="item-button"
                                        type="submit"
                                    >
                                        đăng ký
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
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
