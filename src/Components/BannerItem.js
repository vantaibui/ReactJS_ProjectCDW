import React from "react";

 function BannerItem() {
  return (
    <div className="banner-item">
      <a href="#" className="banner-inner">
        <div className="item-inner">
          <div className="item-bg">
            <div className="bg">
              <img src="./images/trend-2.jpg" alt="trend" />
            </div>
            <div className="overplay" />
          </div>
          <div className="item-layers">
            <div className="text">
              <div className="text-inner">
                <h3>Xu hướng 2019</h3>
                <div className="text-line" />
                <h2 className="text-title">đồng hồ nữ</h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BannerItem;