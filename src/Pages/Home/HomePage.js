import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import ProductItem from "../../Components/ProductItem";
import { actionFetchProducts } from "../../Redux/Actions/ProductAction";
import { productManagementService } from "../../Services/ProductManagementService";
import { SectionCarousel } from "./SectionCarousel";

const HomePage = (props) => {
  let { products } = props;

  // let [products, setProducts] = useState([]);

  useEffect(() => {
    productManagementService
      .fetchProductList()
      .then((result) => {
        // setProducts(result.data);
        props.fetchAllProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let showProductItem = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="col-3 col-item">
            <ProductItem product={product} index={index} />
          </div>
        );
      });
    }
    return result;
  };
  return (
    <div>
      <SectionCarousel products={products} />

      <section className="sellingProducts">
        <div className="sellingProducts__content">
          <h2 className="categoryTitle">Sản phẩm bán chạy</h2>
          <div className="row listProduct">{showProductItem(products)}</div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actionFetchProducts(products));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
