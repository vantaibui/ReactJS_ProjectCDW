import React from "react";
 import {domain} from "../../Configuration/Setting"

const ProductItem = (props) => {
  let { product } = props;

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
  };

  let renderImageProduct = (product) => {
    let result;
    result = product.images.map((image) => {
      console.log(image.link);
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
              {/* <img src="https://www.dangquangwatch.vn/upload/product/154172738_%C4%91%C3%B2ng-h%E1%BB%93-ch%C3%ADnh-h%C3%A3ng-22.jpg" alt="product" /> */}
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
