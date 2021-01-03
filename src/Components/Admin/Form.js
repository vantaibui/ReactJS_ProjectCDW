import React from "react";

export const Form = () => {
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm Sản Phẩm</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input type="text" className="form-control" />
          </div>
          <label>Trạng Thái :</label>
          <select className="form-control" required="required">
            <option value={1}>Kích Hoạt</option>
            <option value={0}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              <i class="fa fa-plus mr-1"></i>
              Thêm
            </button>
            &nbsp;
            <button type="submit" className="btn btn-danger">
              <i class="fa fa-times-circle mr-1"></i>
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
