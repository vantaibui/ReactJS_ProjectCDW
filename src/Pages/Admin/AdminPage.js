// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import {
//   actionDeleteProductRequest,
//   actionFetchProductsRequest,
// } from "../../Redux/Actions/ProductAction";
// import TaskForm from "../../Components/Admin/TaskForm";
// import ProductItem from "../../Components/Admin/ProductItem";
// import ProductList from "../../Components/Admin/ProductList";
// import Control from "../../Components/Admin/Control";

// const AdminPage = (props) => {
//   let { products } = props;

//   useEffect(() => {
//     props.fetchAllProducts();
//   }, []);

//   let onDeleteProduct = (id) => {
//     props.onDeleteProduct(id);
//   };

//   let renderProductItem = (products) => {
//     let result;
//     if (products.length > 0) {
//       result = products.map((product, index) => {
//         return (
//           <ProductItem
//             key={index}
//             product={product}
//             index={index}
//             onDeleteProduct={onDeleteProduct}
//           />
//         );
//       });
//     }
//     return result;
//   };

//   return (
//     <div className="container-fluid px-5">
//       <div className="text-center">
//         <h1>Quản Lý Sản Phẩm</h1>
//         <hr />
//       </div>
//       <div className="row">
//         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//           <TaskForm />
//         </div>
//         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
//           <button type="button" className="btn btn-primary">
//             <span className="fa fa-plus mr-2" />
//             Thêm Sản Phẩm
//           </button>
//           <Control />
//           <div className="row mt-2">
//             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//               <ProductList>{renderProductItem(products)}</ProductList>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     products: state.ProductReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchAllProducts: () => {
//       dispatch(actionFetchProductsRequest());
//     },
//     onDeleteProduct: (id) => {
//       dispatch(actionDeleteProductRequest(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);

import React from "react";
import ProductManagementPage from "./ProductManagementPage";
import CategoryManagementPage from "./CategoryManagementPage";
import HeaderAdmin from "../../Layouts/HeaderAdmin";

const AdminPage = () => {
    // return <ProductManagementPage />;
    return (
        <>
            <HeaderAdmin />
            <ProductManagementPage />
            <CategoryManagementPage />
        </>
    );
};

export default AdminPage;
