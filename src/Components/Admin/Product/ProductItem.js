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
    <tr >
      <td className="border">{index + 1}</td>
      <td className="border">{product.name}</td>
      <td className="text-center border">{product.price}</td>
      <td className="border">{product.description}</td>
      <td className="border">{product.evaluate}</td>
      <td className="border">{product.category}</td>
      <td className="text-center border">
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
