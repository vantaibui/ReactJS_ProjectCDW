import React from "react";

const ProductItem = (props) => {
  let { product, index } = props;

  let onDelete = (id) => {
    props.onDeleteProduct(id);
    // if(window.confirm('Bạn có chắc chắn muốn xóa?')){
    //   console.log(id);
    // }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.product_name}</td>
      <td className="text-center">5000000</td>
      <td>dong ho nam</td>
      <td>5</td>
      <td>Dhn</td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <i className="fa fa-edit mr-1"></i>
          Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDelete(product.id);
          }}
        >
          <i className="fa fa-trash mr-1"></i>
          Xóa
        </button>
      </td>
    </tr>
  );
};


export default ProductItem;
