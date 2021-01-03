import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="row">
          <div className="col-3 col-3--modifier">
            <div className="col-inner col-contact">
              <h3>thông tin liên hệ</h3>
              <div className="contactInformation">
                <div className="icon-box-image">
                  <i className="fa fa-map-marker-alt" />
                </div>
                <div className="icon-box-text">
                  <span>
                    319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                  </span>
                </div>
              </div>
              <div className="contactInformation">
                <div className="icon-box-image">
                  <i className="fas fa-phone-square-alt" />
                </div>
                <div className="icon-box-text">
                  <a href="tel:+076 922 0162">076 922 0162</a>
                </div>
              </div>
              <div className="contactInformation">
                <div className="icon-box-image">
                  <i className="fa fa-envelope-open-text" />
                </div>
                <div className="icon-box-text">
                  <a href="mailto:demonhunterg@gmail.com">
                    demonhunterg@gmail.com
                  </a>
                  <a href="mailto:mon@mona.media">mon@mona.media</a>
                </div>
              </div>
              <div className="contactInformation">
                <div className="icon-box-image">
                  <i className="fab fa-skype" />
                </div>
                <div className="icon-box-text">
                  <a href="http://abc.com">demonhunterp</a>
                </div>
              </div>
              <div className="social">
                <a href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a href>
                  <i className="fab fa-instagram" />
                </a>
                <a href>
                  <i className="fab fa-twitter" />
                </a>
                <a href>
                  <i className="fa fa-rss" />
                </a>
                <a href>
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 col-3--modifier">
            <div className="col-inner col-link">
              <h3>liên kết</h3>
              <div className="link-inner">
                <ul className="menu-link">
                  <li className="menu-item">
                    <a href>Giới thiệu</a>
                  </li>
                  <li className="menu-item">
                    <a href>Đồng hồ nam</a>
                  </li>
                  <li className="menu-item">
                    <a href>Đồng hồ nữ</a>
                  </li>
                  <li className="menu-item">
                    <a href>Blogs</a>
                  </li>
                  <li className="menu-item">
                    <a href>Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3 col-3--modifier">
            <div className="col-inner col-support">
              <h3>hỗ trợ</h3>
              <div className="support-inner">
                <ul className="menu-support">
                  <li className="menu-item">
                    <a href>Hướng dẫn mua hàng</a>
                  </li>
                  <li className="menu-item">
                    <a href>Hướng dẫn thanh toán</a>
                  </li>
                  <li className="menu-item">
                    <a href>Chính sách bảo hành</a>
                  </li>
                  <li className="menu-item">
                    <a href>Chính sách đổi trả</a>
                  </li>
                  <li className="menu-item">
                    <a href>Tư vấn khách hàng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3 col-3--modifier">
            <div className="col-inner col-download-application">
              <h3>TẢI ỨNG DỤNG TRÊN</h3>
              <p>
                Ứng dụng Mona Watch hiện có sẵn trên Google Play &amp; App
                Store. Tải nó ngay.
              </p>
              <div className="application">
                <a href>
                  <img src="./images/img-googleplay.jpg" alt="abc" />
                </a>
              </div>
              <div className="application">
                <a href>
                  <img src="./images/img-appstore.jpg" alt="abc" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
