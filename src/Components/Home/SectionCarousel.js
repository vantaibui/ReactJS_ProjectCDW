import React from "react";
import CarouselItem from "../CarouselItem";

const SectionCarousel = (props) => {
  let { products } = props;

  let renderCarouselItem = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <CarouselItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
  return (
    <section className="sectionCarousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/slide-bg-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>Mona Watch</h4>
              <h1>Đồng hồ Classico</h1>
              <p>
                Cùng với sự phát triển không ngừng của thời trang thế giới, rất
                nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
                dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
              </p>
              <a className="btnDetail" href="#">
                Xem sản phẩm
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slide-bg-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>Mona Watch</h4>
              <h1>Đồng hồ Classico</h1>
              <p>
                Cùng với sự phát triển không ngừng của thời trang thế giới, rất
                nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
                dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
              </p>
              <a className="btnDetail" href="#">
                {" "}
                Xem sản phẩm{" "}
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default SectionCarousel;
