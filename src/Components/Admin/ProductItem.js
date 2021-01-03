import React from "react";

const ProductItem = (props) => {
  let {product, index} = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.product_name}</td>
      <td className="text-center">
        5000000
      </td>
      <td>dong ho nam</td>
      <td>5</td>
      <td>Dhn</td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <i class="fa fa-edit mr-1"></i>
          Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger">
          <i class="fa fa-trash mr-1"></i>
          Xóa
        </button>
      </td>
    </tr>
  );
};


export default ProductItem;