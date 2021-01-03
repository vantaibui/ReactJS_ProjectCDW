import React from "react";

export default function ForgotPassword() {
  return (
    <section className="forgotPassword">
      <div className="forgotPassword__content">
        <div className="row">
          <div className="col-12">
            <div className="col-inner">
              <div className="form-forgot-password">
                <form className="form-input">
                  <p>
                    Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ
                    email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua
                    email.
                  </p>
                  <p className="input-email-userName">
                    <label htmlFor="inputUserName">
                      Tên đăng nhập hoặc email
                    </label>
                    <input
                      type="text"
                      className="inputUserName"
                      id="inputUserName"
                    />
                  </p>
                  <p className="button-reset-password">
                    <button className="btn-reset-password">
                      Đặt lại mật khẩu
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
