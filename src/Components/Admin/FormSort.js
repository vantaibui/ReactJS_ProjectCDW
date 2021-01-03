import React from 'react'

export const FormSort = () => {
    return (
        <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-2" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a role="button">
              <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
            </a>
          </li>
          <li>
            <a role="button">
              <span className="fa fa-sort-alpha-desc pr-5">
                Tên Z-A
              </span>
            </a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a role="button">Trạng Thái Kích Hoạt</a>
          </li>
          <li>
            <a role="button">Trạng Thái Ẩn</a>
          </li>
        </ul>
      </div>
    )
}
