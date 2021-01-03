import React from "react";

const CarouselItem = (props) => {
  let {product, index} = props;


  return (
    <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
      <img src={product.product_image} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h4>Mona Watch</h4>
        <h1>Đồng hồ Classico</h1>
        <p>
          Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều
          thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về
          phong cách, kiểu dáng, màu sắc, kích cỡ…
        </p>
        <a className="btnDetail" href="#">
          {" "}
          Xem sản phẩm{" "}
        </a>
      </div>
    </div>
  );
}

export default CarouselItem;
