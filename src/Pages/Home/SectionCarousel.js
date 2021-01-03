import React from "react";
import CarouselItem from "../../Components/CarouselItem";

export const SectionCarousel = (props) => {
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
        <div className="carousel-inner">{renderCarouselItem(products)}</div>
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
