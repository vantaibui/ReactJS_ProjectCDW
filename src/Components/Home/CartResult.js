import React from "react";

const CartResult = () => {
  return (
    <table className="table-total">
      <tbody>
        <tr className="cart-subtotal border-bottom">
          <th>Tổng phụ</th>
          <td>
            <span>
              1,400,000 <span>₫</span>
            </span>
          </td>
        </tr>
        <tr className="shipping border-bottom">
          <th>Giao hàng</th>
          <td className="shipping-inner">
            <table className="shipping-table">
              <tbody>
                <tr>
                  <td>
                    <p>Giao hàng miễn phí</p>
                    <p>
                      Ước tính cho <strong>Việt Nam</strong>
                    </p>
                    <form className="shipping-method">
                      <a
                        className="shipping-method__btn"
                        href="#shipping-method__address"
                      >
                        Đổi địa chỉ
                        <div
                          className="shipping-method__address"
                          id="shipping-method__address"
                        >
                          <p>
                            <select className="country">
                              <option value="vietnam">Việt Nam</option>
                              <option value="american">American</option>
                              <option value="china">China</option>
                              <option value="campuchia">Campuchia</option>
                            </select>
                          </p>
                          <p>
                            <input
                              type="text"
                              className="district"
                              placeholder="Bang / Hạt"
                            />
                          </p>
                          <p>
                            <input
                              type="text"
                              className="province"
                              placeholder="Tỉnh / Thành phố"
                            />
                          </p>
                          <p>
                            <input
                              type="text"
                              className="zipcode"
                              placeholder="Mã bưu điện"
                            />
                          </p>
                          <p>
                            <button
                              type="submit"
                              className="btn-update-address"
                            >
                              Cập nhật
                            </button>
                          </p>
                        </div>
                      </a>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr className="order-total">
          <th>Tổng</th>
          <td>
            <span>
              1,400,000 <span>₫</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartResult;
