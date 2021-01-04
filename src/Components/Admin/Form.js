import React from "react";


export const Form = () => {
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm Sản Phẩm</h3>
      </div>
      <div className="panel-body border p-3">
        <Form>
          <div className="form-group">
            <label>Name :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Price :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Description :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Evaluate :</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label>Trạng Thái :</label>
            <select className="form-control" required="required">
              <option value={"NAM"}>Đồng Hồ Nam</option>
              <option value={"NU"}>Đồng Hồ Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label>Image :</label>
            <input type="file" className="form-control" />
          </div>

          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              <i className="fa fa-plus mr-1"></i>
              Thêm
            </button>
            &nbsp;
            <button type="submit" className="btn btn-danger">
              <i className="fa fa-times-circle mr-1"></i>
              Hủy Bỏ
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
