// import React from "react";

const ProductItem = (props) => {
   let {product} = props;
  return (
    <div className="product">
      <div className="box">
        <div className="box-image">
          <div className="image-product">
            <a href="true">
              <img src={product.product_image} alt="product" />
            </a>
          </div>
          <div className="image-favorites">
            <div className="circle-icon">
              <i className="fa fa-heart" />
            </div>
            <div className="favorite-title">
              <a href="true">Thêm yêu thích</a>
            </div>
          </div>
        </div>
        <div className="box-text">
          <div className="title">
            <p className="product-name">
              <a href>{product.product_name}</a>
            </p>
          </div>
          <div className="price">
            <ins>
              <span className="amount">{product.product_price}</span>
              <span className="currency">₫</span>
            </ins>
          </div>
          <div className="addInCart">
            <a href className="btnAdd">
              thêm vào giỏ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;