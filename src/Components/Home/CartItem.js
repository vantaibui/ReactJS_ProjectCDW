import React from "react";

const CartItem = (props) => {
  let { productItem } = props;

  let showProductSubTotal = (product_price, quantity) => {
    let result = parseFloat(product_price) * quantity;
    return result;
  };

  let onDeleteProductInCart = (id) => {
    props.onDeleteProductInCart(id);
  };

  let onUpdateProductInCart = (product, quantity) => {
    if (quantity > 0) {
      props.onUpdateProductInCart(product, quantity);
    }
  };

  let renderImageProduct = (product) => {
    let result;
    result = product.images.map((image) => {
      return image.link;
    });
    return result;
  };

  return (
    <tr className="product-item border-bottom">
      <td className="product-remove">
        <button
          onClick={() => {
            onDeleteProductInCart(productItem?.product.id);
          }}
        >
          x
        </button>
      </td>
      <td className="product-thumbnail">
        <a href="detail.html">
          <img src={renderImageProduct(productItem?.product)} alt="abc" />
        </a>
      </td>
      <td className="product-name">
        <span> {productItem?.product.name} </span>
      </td>
      <td className="product-price">
        <span className="amount">
          {productItem?.product.price}
          <span className="currency ml-1">₫</span>
        </span>
      </td>
      <td className="product-quantity">
        <div className="quantity">
          <button
            className="btn-quantity reduction"
            onClick={() => {
              onUpdateProductInCart(
                productItem?.product,
                productItem?.quantity - 1
              );
            }}
          >
            -
          </button>
          <button className="number-quantity">{productItem?.quantity}</button>
          <button
            className="btn-quantity increase"
            onClick={() => {
              onUpdateProductInCart(
                productItem?.product,
                productItem?.quantity + 1
              );
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal">
        <span className="amount">
          {showProductSubTotal(
            productItem?.product.price,
            productItem?.quantity
          )}
          <span className="currency ml-1">₫</span>
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
