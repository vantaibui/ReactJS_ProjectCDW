import React from "react";
import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink exact to="/admin" className="navbar-brand">
                Admin Page
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/admin" className="nav-link">
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/admin-product" className="nav-link">
                            Quản lý sản phẩm
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/admin-category"
                            className="nav-link"
                        >
                            Quản lý danh mục
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderAdmin;
