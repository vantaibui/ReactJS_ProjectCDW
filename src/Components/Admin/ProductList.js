import React from "react";

const ProductList = (props) => {
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
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default ProductList;
