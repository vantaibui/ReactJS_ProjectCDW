import React from "react";

const ProductItem = (props) => {
  let { product } = props;

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
  };

  let renderImageProduct = (product) => {
    let result;
    result = product.images.map((image, index) => {
      return image.link;
    });
    return result;
  };

  return (
    <div className="product">
      <div className="box">
        <div className="box-image">
          <div className="image-product">
            <a href="true">
              <img src={renderImageProduct(product)} alt="product" />
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
              <a href>{product.name}</a>
            </p>
          </div>
          <div className="price">
            <ins>
              <span className="amount">{product.price}</span>
              <span className="currency">₫</span>
            </ins>
          </div>
          <div className="addInCart">
            <button
              className="btnAdd"
              onClick={() => {
                onAddProductToCart(product);
              }}
            >
              thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
