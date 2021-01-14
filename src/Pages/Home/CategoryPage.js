import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import LiMenuItem from "../../Components/Home/LiMenuItem";
import ProductItem from "../../Components/Home/ProductItem";
import { actionFetchCategoriesRequest } from "../../Redux/Actions/CategoryAction";
import { CreateActionADD_UPDATE } from "../../Redux/Actions/CreateAction";
import { actionFetchProductsRequest } from "../../Redux/Actions/ProductAction";
import { ADD_PRODUCT_TO_CART } from "../../Redux/Types/ActionTypes";

const CategoryPage = (props) => {
    let { products, categories } = props;

    console.log(categories);

    useEffect(() => {
        props.fetchAllCategories();
    }, []);

    // useEffect(() => {
    //     props.fetchAllProducts();
    // }, []);

    let onAddProductToCart = (product) => {
        props.onAddProductToCart(product);
    };

    let renderProductItem = (products) => {
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

    let renderLiMenuItem = (products) => {
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <LiMenuItem key={index} product={product} index={index} />
                );
            });
        }
        return result;
    };

    return (
        <>
            <section className="menuCategory">
                <div className="menuCategory__content">
                    <div className="row row--modifier">
                        <div className="col-7 col--modifier">
                            <nav className="navbar navbar-expand-lg navbar--modifier">
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarNav"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <NavLink
                                                className="nav-link"
                                                to="/"
                                                exact
                                            >
                                                Trang chủ
                                            </NavLink>
                                        </li>
                                        <span className="divider">/</span>Đồng
                                        hồ nam
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
                                        <option value="rating">
                                            Thứ tự theo điểm đánh giá
                                        </option>
                                        <option value="date">Mới nhất</option>
                                        <option value="price">
                                            Thứ tự theo giá: thấp đến cao
                                        </option>
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

            <section className="categoryPage">
                <div className="categoryPage__content">
                    <div className="row row-category--modifier">
                        <div className="col-3 col-category--modifier">
                            <div className="category-sidebar">
                                <div className="product-portfolio">
                                    <span className="title-portfolio">
                                        Danh mục sản phẩm
                                    </span>
                                    <div className="is-divider" />
                                    <div className="menu-product-portfolio">
                                        <ul className="menu-ul">
                                            <li className="menu-li li-border-bottom">
                                                <NavLink exact to="/categorynu">
                                                    Đồng hồ nữ
                                                </NavLink>
                                            </li>
                                            <li className="menu-li">
                                                <NavLink exact to="/category">
                                                    Đồng hồ nam
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <span className="title-portfolio">
                                        Sản phẩm
                                    </span>
                                    <div className="is-divider" />
                                    <div className="menu-product-list">
                                        <ul className="menu-ul">
                                            {/* {renderLiMenuItem(products)} */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="new-post">
                                    <span className="title-portfolio">
                                        Bài viết mới nhất
                                    </span>
                                    <div className="menu-new-post">
                                        <ul className="menu-ul">
                                            <li className="menu-li li-border-bottom">
                                                <div className="post-item">
                                                    <div className="row row--modifier">
                                                        <div className="col-3 col--modifier">
                                                            <div className="post-bg">
                                                                <img
                                                                    src="./images/new-4.jpg"
                                                                    alt="abc"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-9 col--modifier">
                                                            <div className="post-description">
                                                                <a
                                                                    href="./detail.html"
                                                                    title="Chiếc đồng hồ của những CEO quyền lực nhất thế giới"
                                                                >
                                                                    Chiếc đồng
                                                                    hồ của những
                                                                    CEO quyền
                                                                    lực nhất thế
                                                                    giới
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="menu-li li-border-bottom">
                                                <div className="post-item">
                                                    <div className="row row--modifier">
                                                        <div className="col-3 col--modifier">
                                                            <div className="post-bg">
                                                                <img
                                                                    src="./images/new-4.jpg"
                                                                    alt="abc"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-9 col--modifier">
                                                            <div className="post-description">
                                                                <a
                                                                    href="./detail.html"
                                                                    title="Chiếc đồng hồ của những CEO quyền lực nhất thế giới"
                                                                >
                                                                    Chiếc đồng
                                                                    hồ của những
                                                                    CEO quyền
                                                                    lực nhất thế
                                                                    giới
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="menu-li">
                                                <div className="post-item">
                                                    <div className="row row--modifier">
                                                        <div className="col-3 col--modifier">
                                                            <div className="post-bg">
                                                                <img
                                                                    src="./images/new-4.jpg"
                                                                    alt="abc"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-9 col--modifier">
                                                            <div className="post-description">
                                                                <a
                                                                    href="./detail.html"
                                                                    title="Chiếc đồng hồ của những CEO quyền lực nhất thế giới"
                                                                >
                                                                    Chiếc đồng
                                                                    hồ của những
                                                                    CEO quyền
                                                                    lực nhất thế
                                                                    giới
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 col-category--modifier">
                            <div className="category-selling-product">
                                <div className="row listProduct">
                                    {renderProductItem(categories)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer,
        categories: state.CategoryReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => {
            dispatch(actionFetchProductsRequest());
        },
        fetchAllCategories: () => {
            dispatch(actionFetchCategoriesRequest());
        },
        onAddProductToCart: (product) => {
            dispatch(CreateActionADD_UPDATE(ADD_PRODUCT_TO_CART, product, 1));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
