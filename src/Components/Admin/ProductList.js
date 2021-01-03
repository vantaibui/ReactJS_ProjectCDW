import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let { products } = props;
  let renderProductItem = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">No.</th>
          <th className="text-center">Name</th>
          <th className="text-center">Price</th>
          <th className="text-center">Description</th>
          <th className="text-center">Evaluate</th>
          <th className="text-center">Catalog</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      {/* <tbody>{renderProductItem(products)}</tbody> */}
    </table>
  );
};

export default ProductList;
