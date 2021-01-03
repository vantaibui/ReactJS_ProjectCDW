import React from "react";

export default function Information() {
  return (
    <section className="information">
      <div className="information__content">
        <div className="row">
          <div className="col-6 col-left">
            <div className="left-inner">
              <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
            </div>
          </div>
          <div className="col-6 col-right">
            <div className="right-inner">
              <form action>
                <input
                  className="item-input"
                  type="text"
                  placeholder="Email ..."
                />
                <button className="item-button" type="submit">
                  đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
