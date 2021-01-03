import React from "react";

function BannerInfoItem() {
  return (
    <div className="banner">
      <div className="banner-inner">
        <div className="banner-bg">
          <div className="bg">
            <img src="./images/banner-03.jpg" alt="abc" />
          </div>
          <div className="overplay" />
        </div>
        <div className="banner-layers">
          <div className="text-box">
            <div className="text">
              <div className="text-inner">
                <h2>CỔ ĐIỂN</h2>
                <h3>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerInfoItem;
